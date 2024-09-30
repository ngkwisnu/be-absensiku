import makeUserDb from "../../databases/repositories/user/index.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import { validateId } from "../../utils/validator.js";
import user_data_validation from "../../validations/user/user.js";

const update_user_service_func = async ({ id, data }) => {
  const UserModel = makeUserDb();
  if (!validateId(id)) throw new ErrorHandler("id is not valid!");
  const { getDataValid } = user_data_validation({ data });
  const dataUpdateIsValid = getDataValid();
  const updateData = await UserModel.update_user_repository_func({
    id,
    data: dataUpdateIsValid,
  });
  return updateData;
};

export default update_user_service_func;
