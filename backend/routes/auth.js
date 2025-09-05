const express = require("express");
const router = express.Router();
const db = require("../config/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/register", async (req, res) => {
  const { nombre, apellido, correo, documento, contrasena } = req.body;

  if (!nombre || !apellido || !correo || !documento || !contrasena) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  const id_rol = 2; // ciudadano por defecto

  // Verificar si el documento ya existe
  db.query("SELECT * FROM usuarios WHERE documento = ?", [documento], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length > 0) return res.status(400).json({ error: "El documento ya está registrado" });

    const sql = `
      INSERT INTO usuarios (nombre, apellido, correo, contrasena, documento, id_rol)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [nombre, apellido, correo, contrasena, documento, id_rol], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, nombre, correo });
    });
  });
});


router.post("/login", (req, res) => {
  const { correo, contrasena } = req.body;

  db.query("SELECT * FROM usuarios WHERE correo = ?", [correo], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(400).json({ error: "Usuario no encontrado" });

    const user = results[0];

    // Comparación directa
    if (contrasena !== user.contrasena) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    res.json({ nombre: user.nombre, apellido: user.apellido, correo: user.correo, id_rol: user.id_rol });
  });
});

module.exports = router;
