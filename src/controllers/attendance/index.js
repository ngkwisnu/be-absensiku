import { successResponse } from "../../utils/response.js";
import { check_in_attendance_case_func } from "../../use_cases/attendance/index.js";
import check_in_attendance_function from "./checkInAttendance.js";

const create_attendance = check_in_attendance_function(
  check_in_attendance_case_func,
  successResponse
);

export const attendance_controller = {
  create_attendance,
};
