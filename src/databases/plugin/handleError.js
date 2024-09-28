import { ErrorHandler } from "../../utils/response.js";

const handleError = (schema) => {
  schema.pre("save", function (err, doc, next) {
    if (err.code === 11000) {
      if (err.keyValue.username) {
        throw new ErrorHandler(
          "Username is already taken. Please choose a different one.",
          400
        );
      }
      if (err.keyValue.email) {
        throw new ErrorHandler("Email is available for registration.", 400);
      }
    }
    next();
  });
};

export default handleError;
