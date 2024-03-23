import mongoose, { Schema, models } from "mongoose"
import { string } from "sharp/lib/is"

const projectSchema = new Schema(
  {
    isApproved: {
      type: Boolean,
      default: false,
    },
    salesPerson: {
      type: String,
      required: true,
    },
    salesId: {
      type: String,
      required: true,
    },
    upSellerId: {
      type: String,
      default: "none",
    },
    projectName: {
      type: String,
      required: true,
    },
    projectDetails: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
    },
    companyName: {
      type: String,
      required: true,
    },
    commisson_rate: {
      type: Number,
      default: 20,
    },
    dateSigned: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
    clientName: {
      type: string,
    },
    email: {
      type: string,
      required: true,
    },
    phone: {
      type: string,
      required: true,
    },
    address: {
      type: string,
      required: true,
    },
    callClient: {
      type: Boolean,
      default:false,
    },
    emailClient: {
      type: Boolean,
      default:false,
    }
  },
  { timestamps: true }
)

const Project = models.Project || mongoose.model("Project", projectSchema)

export default Project
