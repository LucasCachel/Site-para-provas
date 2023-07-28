const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000; const IP = ' 192.168.134.39';

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
