import ErrorHandler from "../../utils/ErrorHandler.js";
import { validateType } from "../../utils/validator.js";

const login_user_validation = ({ username, password }) => {
  if (!username) throw new ErrorHandler("Username must be filled!");
  if (!validateType(username, "string"))
    throw new ErrorHandler("Username must be string!");
  if (!password) throw new ErrorHandler("Password must be filled!");
  if (!validateType(password, "string"))
    throw new ErrorHandler("Password must be string!");
  const dataIsValidate = {
    username,
    password,
  };
  return {
    getLoginValidate: () => dataIsValidate,
  };
};

export default login_user_validation;
