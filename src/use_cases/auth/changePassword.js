import makeUserDb from "../../databases/repositories/user/index.js";
import isUserRegistered from "../../services/user/isUserRegistered.js";
import { hashPassword } from "../../utils/bcrypt.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const change_password_case_func = async ({ email, password }) => {
  try {
    const UserModel = makeUserDb();
    password = hashPassword(password);
    const [getAccount] =
      await UserModel.change_password_user_by_email_repository_func({
        email,
        password,
      });
    return getAccount;
  } catch (error) {
    console.log(error);
  }
};

export default change_password_case_func;
