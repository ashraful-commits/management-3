import mongoose, { Schema, models } from "mongoose"
import { string } from "sharp/lib/is"

const salesMeetingSchema = new Schema(
  {
    videoId: {
      type: string,
      required: true,
    },
    videoTitle: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
)

const salesMeeting =
  models.salesMeeting || mongoose.model("salesMeeting", salesMeetingSchema)

export default salesMeeting
