import Attendance from "../../models/attendance.model.js";

const update_attendance_repository_func = async ({ id, data }) => {
  const attendanceData = await Attendance.findOne({ _id: id });
  Object.assign(attendanceData, data);
  await attendanceData.save();
  return attendanceData;
};

export default update_attendance_repository_func;
