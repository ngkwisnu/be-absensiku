const check_in_attendance_function =
  (check_in_attendance_case_func, createResponse) => async (req, res) => {
    const result = await check_in_attendance_case_func(req);
    return createResponse(result);
  };

export default check_in_attendance_function;
