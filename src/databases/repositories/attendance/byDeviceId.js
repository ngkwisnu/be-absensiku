import { Attendance } from "../../models/attendance.model.js";

const get_attendance_by_ip_repository_func = async ({ ip }) => {
  const attendance = await Attendance.findOne({ deviceId: ip });
  console.log(attendance);
  return attendance;
};

export default get_attendance_by_ip_repository_func;
