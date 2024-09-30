import mongoose from "mongoose";

import handleError from "../plugin/handleError.js";
import softDelete from "../plugin/softDelete.js";
import timestamps from "../plugin/timestamps.js";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    default: null,
    trim: true,
  },
  institution: {
    type: String,
    default: null,
    trim: true,
  },
  contactNumber: {
    type: String,
    default: null,
    trim: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

UserSchema.plugin(timestamps);
UserSchema.plugin(handleError);
UserSchema.plugin(softDelete);

const User = mongoose.model("master_users", UserSchema);

export default User;
