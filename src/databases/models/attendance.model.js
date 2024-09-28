import mongoose from "mongoose";

import handleError from "../plugin/handleError.js";
import softDelete from "../plugin/softDelete.js";
import timestamps from "../plugin/timestamps.js";

const AttendanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["Present", "Absent", "Late"],
    required: true,
    default: "Present",
  },
  notes: {
    type: String,
    default: null,
    trim: true,
  },
  supportingFile: {
    fileName: {
      type: String,
      default: null,
      trim: true,
    },
    fileUrl: {
      type: String,
      default: null,
      trim: true,
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

AttendanceSchema.plugin(timestamps);
AttendanceSchema.plugin(softDelete);
AttendanceSchema.plugin(handleError);

const Attendance = mongoose.model("UserAttendance", AttendanceSchema);

export default Attendance;
