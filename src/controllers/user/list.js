const list_user_func =
  (list_user_service_func, response) => async (req, res) => {
    console.log(req.user);
    const list_user = await list_user_service_func();
    return response(list_user);
  };

export default list_user_func;
