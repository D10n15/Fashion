const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch(err => console.error("❌ Error en la conexión", err));

// Rutas de prueba
app.get("/", (req, res) => {
    res.send("Servidor funcionando 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Servidor en http://localhost:${PORT}`));
