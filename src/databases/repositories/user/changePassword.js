import { User } from "../../models/user.model.js";

const change_password_user_by_email_repository_func = async ({
  password,
  email,
}) => {
  const user = await User.changePassword({ password: password, email: email });
  return user;
};

export default change_password_user_by_email_repository_func;
