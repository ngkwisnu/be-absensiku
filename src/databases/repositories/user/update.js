import { User } from "../../models/user.model.js";

const update_user_repository_func = async ({ id, body }) => {
  const dataUser = await User.update({ id: id, data: body });
  return dataUser;
};

export default update_user_repository_func;
