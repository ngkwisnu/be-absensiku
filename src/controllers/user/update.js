const update_user_function =
  (update_user_case_func, createResponse) => async (req, res) => {
    const {
      params: { id },
      body,
    } = req;
    const result = await update_user_case_func({ id, data: body });
    return createResponse(result);
  };

export default update_user_function;
