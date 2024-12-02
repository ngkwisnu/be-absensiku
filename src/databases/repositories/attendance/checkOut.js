import { getLocalTime } from "../../../utils/localTime.js";
import { Attendance } from "../../models/attendance.model.js";

const attendance_checkout_repository_func = async ({ id }) => {
  const detailAttendance = await Attendance.updateCheckOut({ userId: id });
  return detailAttendance;
};

export default attendance_checkout_repository_func;
