import makeUserDb from "../../databases/repositories/user/index.js";
import { hashPassword } from "../../utils/bcrypt.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import { validateId } from "../../utils/validator.js";
import { update_user_validation } from "../../validations/user/index.js";

const update_user_case_func = async ({ id, data, image }) => {
  const UserModel = makeUserDb();
  if (!validateId(id)) throw new ErrorHandler("id is not valid!");
  const { getDataValid } = update_user_validation(data);
  const dataUpdateIsValid = getDataValid();
  console.log({
    ...dataUpdateIsValid,
    image: image.filename ? image.filename : image.image,
  });
  dataUpdateIsValid.password = hashPassword(dataUpdateIsValid.password);
  const updateData = await UserModel.update_user_repository_func({
    id,
    data: {
      ...dataUpdateIsValid,
      image: image.filename ? image.filename : image.image,
    },
  });
  return updateData;
};

export default update_user_case_func;
