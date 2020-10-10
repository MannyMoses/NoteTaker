// Require Dependencies
const express = require("express"); 

// Configure Express App
const app = express(); 

// Define the PORT to connect to
const PORT = process.env.PORT || 3000; 


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));


// Bring in Route Methods to server
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes");

// Express uses Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listen for PORT/server connection
app.listen(PORT, function() {
    console.log(`App listening on PORT: + ${PORT}`);
});