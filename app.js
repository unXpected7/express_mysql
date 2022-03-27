const express = require("express");
const routes = require("./routes/router");
const app = express();
const PORT = 8000;

// app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use("/product", routes);

app.listen(PORT, async () => {
    console.log('success in port 8000')
});