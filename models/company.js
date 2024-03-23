import mongoose, { Schema, models } from "mongoose"

const companySchema = new Schema(
  {
    companyLogo: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyType: {
      type: String,
      default: "company type here",
    },
    companyAddress: {
      type: String,
      required: true,
    },
    companyEmail: {
      type: String,
      required: true,
    },
    companyPhone: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      default: 20,
    },
    overview: {
      type: String,
      required: true,
    },
    socialLink:{
      type:Object,
      default:{
      facebook:"",
      twitter:"",
      instagram:"",
      linkedin:""
      }
    }
  },
  { timestamps: true }
)

const Company = models.Company || mongoose.model("Company", companySchema)

export default Company
