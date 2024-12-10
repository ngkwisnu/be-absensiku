import { User } from "../../models/user.model.js";

const get_user_by_id_repository_func = async ({ id }) => {
  const user_detail = await User.findById(id);
  console.log(user_detail);
  user_detail[0].image = user_detail[0].image
    ? user_detail[0].image
    : "https://88gzhtq3-8000.asse.devtunnels.ms/api/v1/files/profile-circle-icon-1024x1024-qv2gufvw (1).png";
  return user_detail;
};

export default get_user_by_id_repository_func;
