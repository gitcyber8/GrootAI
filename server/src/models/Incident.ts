import mongoose from "mongoose";

const IncidentSchema = new mongoose.Schema({
  title: String,

  severity: String,

  status: {
    type: String,
    default: "Investigating",
  },
});

export default mongoose.model(
  "Incident",
  IncidentSchema
);