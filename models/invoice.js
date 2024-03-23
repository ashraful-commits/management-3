import mongoose, { Schema, models } from "mongoose"

const invoiceSchema = new Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    upsellerId: {
      type: String,
      required: true,
    },
    invoiceDate: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
    },
    status: {
      type: String,
      default: "Unpaid",
    },
    commission_paid: {
      type: String,
      default: "No",
    },
  },
  { timestamps: true }
)

const Invoice = models.Invoice || mongoose.model("Invoice", invoiceSchema)

export default Invoice
