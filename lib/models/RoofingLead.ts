import mongoose, { Schema, models, model } from "mongoose";

const RtbSchema = new Schema(
  {
    pinged: { type: Boolean, default: false },
    accepted: { type: Boolean, default: null },
    bid: { type: Number, default: null },
    trackingNumber: { type: String, default: null },
  },
  { _id: false }
);

const RoofingLeadSchema = new Schema(
  {
    campaign: {
      type: String,
      enum: ["contractors", "general"],
      required: true,
    },
    source: {
      type: String,
      enum: ["popup", "consult_button", "contact_form"],
      required: true,
    },
    phone: { type: String, required: true }, // 10 digits
    zip: { type: String, required: true }, // 5 digits
    name: { type: String, default: null },
    email: { type: String, default: null },
    businessType: { type: String, default: null },
    message: { type: String, default: null },
    tcpaConsent: { type: Boolean, required: true },
    rtb: { type: RtbSchema, default: () => ({}) },
    userAgent: { type: String, default: null },
    ip: { type: String, default: null },
  },
  { timestamps: true }
);

export default models.RoofingLead || model("RoofingLead", RoofingLeadSchema);