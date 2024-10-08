import User from "../../models/user.model.js";
import { pagination } from "../pagination.js";

const list_user_repository_func = async ({ query }) => {
  const data = await pagination({ query }, User);
  return data;
};

export default list_user_repository_func;
