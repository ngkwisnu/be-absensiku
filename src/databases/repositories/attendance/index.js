import create_attendance_repository_func from "./create.js";
import list_attendance_repository_func from "./list.js";
import attendance_by_id_repository_func from "./byId.js";
import update_attendance_repository_func from "./update.js";
import remove_attendance_repository_func from "./remove.js";
import get_attendance_by_ip_repository_func from "./byDeviceId.js";
import attendance_checkout_repository_func from "./checkOut.js";

export default function makeAttendanceDb() {
  return Object.freeze({
    create_attendance_repository_func,
    list_attendance_repository_func,
    attendance_by_id_repository_func,
    update_attendance_repository_func,
    remove_attendance_repository_func,
    get_attendance_by_ip_repository_func,
    attendance_checkout_repository_func,
  });
}
