import { Attendance } from "../../models/attendance.model.js";

const create_attendance_repository_func = async ({ data }) => {
  try {
    const createAttendance = await Attendance.create({ data });
    return createAttendance;
  } catch (error) {
    console.log(error);
  }
};

export default create_attendance_repository_func;
