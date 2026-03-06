import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/internship_portal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Define a User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  university: String,
  department: String,
  skills: String,
  github: String,
  portfolio: String,
});

const User = mongoose.model("User", userSchema);

// API endpoint to save data
app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body); // Create new user from request
    await user.save(); // Save to database
    res.json({ message: "Registration successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving user" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));