// This library is ESM.
import got from "got";

import express from "express";
const app = express();

app.get("/api", async (req, res) => {
  try {
    const response = await got.get("https://random-data-api.com/api/users/random_user").json();

    res.json({
      success: true
    });
  }
  catch (e) {
    res.status(500).json({
      success: false
    });
  }
});

export const handler = app;
