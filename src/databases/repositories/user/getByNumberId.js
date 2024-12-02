import { User } from "../../models/user.model.js";

const get_user_by_number_id_repository_func = async ({ number_id }) => {
  const user_detail = await User.findOneByNumberId({ number_id: number_id });
  user_detail[0].image = user_detail[0].image
    ? user_detail[0].image
    : "https://88gzhtq3-3001.asse.devtunnels.ms/api/v1/files/profile-circle-icon-1024x1024-qv2gufvw (1).png";
  return user_detail;
};

export default get_user_by_number_id_repository_func;
