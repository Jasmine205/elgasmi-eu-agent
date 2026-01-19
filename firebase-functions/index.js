const functions = require("firebase-functions");
const express = require("express");

const app = express();

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    platform: "firebase-functions",
    timestamp: new Date().toISOString(),
  });
});

// API routes placeholder
app.all("/api/*", (req, res) => {
  res.json({
    message: "API endpoint",
    path: req.path,
    method: req.method,
    note: "Configure your API routes here",
  });
});

exports.api = functions.https.onRequest(app);
