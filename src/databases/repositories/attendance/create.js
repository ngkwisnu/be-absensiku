import Attendance from "../../models/attendance.model.js";

const create_attendance_repository_func = async ({ data }) => {
  const createAttendance = await Attendance.create(data);
  return createAttendance;
};

export default create_attendance_repository_func;
