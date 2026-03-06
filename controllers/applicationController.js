import Application from "../models/Application.js";

// Create application
export const createApplication = async (req, res) => {
  try {
    const { email } = req.body;
    const existingApp = await Application.findOne({ email });

    if (existingApp) {
      return res.status(200).json({
        status: "exists",
        message: "Email already registered. Please login."
      });
    }

    const app = await Application.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Registration successful!",
      data: app
    });
  } catch (error) {
    console.error("Error in createApplication:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

// Login
export const loginApplication = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await Application.findOne({ name, email });

    if (!user) {
      return res.status(200).json({ status: "notfound", message: "User not found" });
    }

    res.status(200).json({ status: "success", message: "Login successful", data: user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

// Get all applications
export const getApplications = async (req, res) => {
  try {
    const apps = await Application.find();
    res.json(apps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete application
export const deleteApplication = async (req, res) => {
  try {
    const app = await Application.findByIdAndDelete(req.params.id);
    if (!app) return res.status(404).json({ message: "Application not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update application
export const updateApplication = async (req, res) => {
  try {
    const app = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!app) return res.status(404).json({ message: "Application not found" });
    res.json(app);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};