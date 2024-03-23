import mongoose, { Schema, models } from "mongoose"
import { string } from "sharp/lib/is"

const clientSchema = new Schema(
  {
    clientName: {
      type: string,
      required: true,
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
    sellerId: {
      type: String,
      required: true,
    },
    callClient: {
      type: Boolean,
      default:false,
      required: true,
    },
   emailClient: {
    type: Boolean,
    default:false,
    required: true,
  }
  },
  { timestamps: true }
)

const Client = models.Client || mongoose.model("Client", clientSchema)

export default Client
