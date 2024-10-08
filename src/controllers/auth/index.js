import { login_user_case_func } from "../../use_cases/auth/index.js";
import { successResponse } from "../../utils/response.js";
import login_user_function from "./login.js";

const login_user = login_user_function(login_user_case_func, successResponse);

export const auth_controller = {
  login_user,
};
