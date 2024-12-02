import { Attendance } from "../../models/attendance.model.js";

const remove_attendance_repository_func = async ({ id }) => {
  const removeAttendance = await Attendance.remove({ id: id });
  return removeAttendance;
};

export default remove_attendance_repository_func;
