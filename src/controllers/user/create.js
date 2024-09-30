const create_user_function =
  (create_user_sercive_func, createResponse) => async (req, res) => {
    const result = await create_user_sercive_func(req.body);
    return createResponse(result);
  };

export default create_user_function;
