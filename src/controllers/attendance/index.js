import { successResponse } from "../../utils/response.js";
import {
  check_in_attendance_case_func,
  check_out_attendance_case_func,
} from "../../use_cases/attendance/index.js";
import check_in_attendance_function from "./checkInAttendance.js";
import check_out_attendance_function from "./checkOutAttendance.js";

const create_attendance = check_in_attendance_function(
  check_in_attendance_case_func,
  successResponse
);

const checkout_attendance = check_out_attendance_function(
  check_out_attendance_case_func,
  successResponse
);

export const attendance_controller = {
  create_attendance,
  checkout_attendance,
};
