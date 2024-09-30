import user_data_validation from "../../validations/user/user.js";
import makeUserDb from "../../databases/repositories/user/index.js";
import { hashPassword } from "../../utils/bcrypt.js";

const create_user_service_func = async (data) => {
  const { getDataValid } = user_data_validation(data);
  const UserModel = makeUserDb();
  const validateDataUser = getDataValid();
  validateDataUser.password = hashPassword(validateDataUser.password);
  const createDataUser = await UserModel.create_user_repository_func(
    validateDataUser
  );
  return createDataUser;
};

export default create_user_service_func;
