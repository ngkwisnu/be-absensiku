import login_user_service_func from "../../services/auth/login.js";
import { successResponse } from "../../utils/response.js";
import login_user_function from "./login.js";

const login_user = login_user_function(
  login_user_service_func,
  successResponse
);

export const auth_controller = {
  login_user,
};
