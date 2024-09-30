import makeUserDb from "../../databases/repositories/user/index.js";

const list_user_service_func = async () => {
  const UserModel = makeUserDb();
  const response = await UserModel.list_user_repository_func();
  return response;
};

export default list_user_service_func;
