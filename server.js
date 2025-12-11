const express = require("express");
const faqRoutes = require("./routes/faqRoutes");
require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

  const PORT = process.env.PORT || 3008;


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// const asyncHandler = require("./middleware/asyncHandler");
// const Product = require("./models/Product");
// app.get(
//   "/products",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find();
//     res.status(200).json(products);
//   })
// );



app.use("/api/faqs", faqRoutes);
app.use("/api/grades", require("./routes/gradeRoutes"));

// Global error middleware
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
