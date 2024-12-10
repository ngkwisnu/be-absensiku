import { User } from "../../models/user.model.js";

const get_user_by_name_repository_func = async ({ name }) => {
  const user = await User.findOne({ name: name });
  user[0].image = user[0].image
    ? user[0].image
    : "https://88gzhtq3-8000.asse.devtunnels.ms/api/v1/files/profile-circle-icon-1024x1024-qv2gufvw (1).png";
  return user;
};

export default get_user_by_name_repository_func;
