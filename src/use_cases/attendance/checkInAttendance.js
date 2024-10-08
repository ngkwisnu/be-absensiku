import makeAttendanceDb from "../../databases/repositories/attendance/index.js";
import { getLocalTime } from "../../utils/localTime.js";
import attendance_data_validation from "../../validations/attendance/attendance.js";
import checkLateStatus from "../../services/attendance/checkLateStatus.js";

const check_in_attendance_case_func = async (req) => {
  const attendanceModel = makeAttendanceDb();
  const { status, notes } = req.body;
  const [file] = req.fileImage.file;
  const attendanceData = {
    userId: req.user.id,
    status: status,
    notes: notes,
    fileUrl: file.filename,
  };
  const { getValidDataAttendance } = await attendance_data_validation(
    attendanceData
  );
  const dataIsValidate = getValidDataAttendance();
  dataIsValidate.isLate = checkLateStatus();
  dataIsValidate.checkInTime = getLocalTime();
  const checkInAttendance =
    await attendanceModel.create_attendance_repository_func({
      data: dataIsValidate,
    });
  return checkInAttendance;
};

export default check_in_attendance_case_func;
