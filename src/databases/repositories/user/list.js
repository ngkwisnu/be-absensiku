import User from "../../models/user.model.js";

const list_user_repository_func = async () => {
  const list_user = await User.find();
  return list_user;
};

export default list_user_repository_func;
