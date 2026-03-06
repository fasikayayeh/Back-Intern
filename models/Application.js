import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  university: { type: String, required: true },
  department: { type: String, required: true },
  skills: { type: String },
  github: { type: String },
  portfolio: { type: String },
}, 
{ timestamps: true });

const Application = mongoose.model("Application", applicationSchema);

export default Application;