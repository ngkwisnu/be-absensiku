import { Attendance } from "../../models/attendance.model.js";

const attendance_by_user_id_repository_func = async ({ userId }) => {
  const detailAttendance = await Attendance.findOne({ userId: userId });
  return detailAttendance;
};

export default attendance_by_user_id_repository_func;
