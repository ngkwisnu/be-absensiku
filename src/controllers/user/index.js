import list_user_func from "./list.js";
import create_user_function from "./create.js";

import {
  list_user_service_func,
  create_user_service_func,
} from "../../services/index.js";
import { successResponse } from "../../utils/response.js";

const list_user = list_user_func(list_user_service_func, successResponse);
const create_user = create_user_function(
  create_user_service_func,
  successResponse
);

export const user_controller = {
  list_user,
  create_user,
};
