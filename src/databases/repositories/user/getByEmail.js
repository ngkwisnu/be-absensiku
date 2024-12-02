import { User } from "../../models/user.model.js";

const get_user_by_email_repository_func = async ({ email }) => {
  const user = await User.findOne({ email: email });
  user[0].image = user[0].image
    ? user[0].image
    : "https://88gzhtq3-3001.asse.devtunnels.ms/api/v1/files/profile-circle-icon-1024x1024-qv2gufvw (1).png";
  return user;
};

export default get_user_by_email_repository_func;
