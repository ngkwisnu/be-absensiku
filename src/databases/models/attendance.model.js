import mongoose from "mongoose";

import handleError from "../plugin/handleError.js";
import softDelete from "../plugin/softDelete.js";
import timestamps from "../plugin/timestamps.js";

const AttendanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "master_users",
    required: true,
  },
  status: {
    type: String,
    enum: ["Present", "Absent"],
    required: true,
  },
  checkInTime: {
    type: Date,
    default: null,
  },
  checkOutTime: {
    type: Date,
    default: null,
  },
  notes: {
    type: String,
    default: null,
    trim: true,
  },
  fileUrl: {
    type: String,
    default: null,
    trim: true,
  },
  isLate: {
    type: Boolean,
    default: false,
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

const Attendance = mongoose.model("user_attendance", AttendanceSchema);

export default Attendance;
