import User from "../../models/user.model.js";

const get_user_by_username_repository_func = async ({ username }) => {
  const user_detail = await User.findOne({ username: username });
  return user_detail;
};

export default get_user_by_username_repository_func;
