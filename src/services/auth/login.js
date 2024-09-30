import login_user_validation from "../../validations/auth/login.js";
import makeUserDb from "../../databases/repositories/user/index.js";
import { comparePassword } from "../../utils/bcrypt.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import generate_token from "./generateToken.js";

const login_user_service_func = async ({ username, password }) => {
  const userModel = makeUserDb();
  const { getLoginValidate } = login_user_validation({ username, password });
  const validateLoginData = getLoginValidate();
  const userData = await userModel.get_user_by_username_repository_func({
    username: validateLoginData.username,
  });
  const passwordIsMatch = comparePassword(password, userData.password);
  if (!passwordIsMatch) throw new ErrorHandler("Password is not match!");
  const token = generate_token({
    username: userData.username,
    email: userData.email,
  });
  return token;
};

export default login_user_service_func;
