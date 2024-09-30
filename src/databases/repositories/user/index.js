import list_user_repository_func from "./list.js";
import get_user_by_username_repository_func from "./getByUserame.js";
import create_user_repository_func from "./create.js";
import get_user_by_id_repository_func from "./getById.js";
import remove_user_repository_func from "./remove.js";
import update_user_repository_func from "./update.js";

export default function makeUserDb() {
  return Object.freeze({
    list_user_repository_func,
    get_user_by_username_repository_func,
    create_user_repository_func,
    get_user_by_id_repository_func,
    remove_user_repository_func,
    update_user_repository_func,
  });
}
