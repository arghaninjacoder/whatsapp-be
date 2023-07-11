import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Yo");
});

export default app;
