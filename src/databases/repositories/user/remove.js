import { User } from "../../models/user.model.js";

const remove_user_repository_func = async ({ id }) => {
  const removeUser = await User.remove(id);
  return removeUser;
};

export default remove_user_repository_func;
