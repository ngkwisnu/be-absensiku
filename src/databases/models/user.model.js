// import mongoose from "mongoose";

// import handleError from "../plugin/handleError.js";
// import softDelete from "../plugin/softDelete.js";
// import timestamps from "../plugin/timestamps.js";

// const UserSchema = new mongoose.Schema({
//   number_id: {
//     type: String,
//     required: [true, "Nomor Induk is required"],
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: [true, "Password is required"],
//   },
//   email: {
//     type: String,
//     required: [true, "Email is required"],
//     lowercase: true,
//   },
//   internship_period: {
//     type: String,
//     default: null,
//     trim: true,
//   },
//   name: {
//     type: String,
//     required: [true, "Email is required"],
//     trim: true,
//   },
//   institution: {
//     type: String,
//     default: null,
//     trim: true,
//   },
//   address: {
//     type: String,
//     default: null,
//     trim: true,
//   },
//   contactNumber: {
//     type: String,
//     default: null,
//     trim: true,
//   },
//   description: {
//     type: String,
//     defaut: null,
//     trim: true,
//   },
//   image: {
//     type: String,
//     default: null,
//   },
//   isActive: {
//     type: Boolean,
//     required: true,
//     default: true,
//   },
//   deletedAt: {
//     type: Date,
//     default: null,
//   },
// });

// UserSchema.plugin(timestamps);
// // UserSchema.plugin(handleError);
// UserSchema.plugin(softDelete);

// const User = mongoose.model("master_users", UserSchema);

// export default User;

import dbPool from "../connection.js";

const find = (includeDeleted = false) => {
  const SQLQuery = includeDeleted
    ? "SELECT * FROM master_users"
    : "SELECT * FROM master_users WHERE deletedAt IS NULL";

  return dbPool.execute(SQLQuery);
};

const findById = async (id) => {
  try {
    const result = await dbPool.query(
      "SELECT * FROM master_users WHERE id = ?",
      [id]
    );
    return result[0];
  } catch (error) {
    console.error("Error in getUserById:", error);
    throw error;
  }
};

const findByName = async (data) => {
  try {
    const [value] = Object.keys(data);
    const result = await dbPool.query(
      `SELECT * FROM master_users WHERE ${value} = ?`,
      [data[value]]
    );
    return result;
  } catch (error) {
    console.error("Error in getUserById:", error);
    throw error;
  }
};

const findOne = async (data) => {
  try {
    const [value] = Object.keys(data);
    const result = await dbPool.query(
      `SELECT * FROM master_users WHERE ${value} = ?`,
      [data[value]]
    );
    return result[0];
  } catch (error) {
    console.error("Error in getUserById:", error);
    throw error;
  }
};

const findOneByNumberId = async ({ number_id }) => {
  try {
    const result = await dbPool.query(
      `SELECT * FROM master_users WHERE number_id = ?`,
      [number_id]
    );
    console.log(result);
    return result[0];
  } catch (error) {
    console.error("Error in getUserById:", error);
    throw error;
  }
};

const create = (body) => {
  const { email, number_id, password, name, isActive } = body;
  const SQLQuery = `
        INSERT INTO master_users (email, number_id, password, name, isActive) 
        VALUES (?, ?, ?, ?, ?)
    `;
  const values = [email, number_id, password, name, isActive];
  return dbPool.execute(SQLQuery, values);
};

const changePassword = ({ password, email }) => {
  const SQLQuery = `
        UPDATE master_users
        SET password = ? WHERE email = ?
    `;
  const values = [password, email];
  return dbPool.execute(SQLQuery, values);
};

const update = async ({ id, data }) => {
  console.log(data);
  try {
    const {
      email,
      number_id,
      password,
      internship_period,
      name,
      institution,
      address,
      contactNumber,
      description,
      image,
      isActive,
      deletedAt,
    } = data;

    const SQLQuery = `
      UPDATE master_users
      SET 
        email = ?, 
        number_id = ?, 
        password = ?, 
        internship_period = ?, 
        name = ?, 
        institution = ?, 
        address = ?, 
        contactNumber = ?, 
        description = ?, 
        image = ?, 
        isActive = ?, 
        deletedAt = ?, 
        updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    const values = [
      email || "",
      number_id || "",
      password || "",
      internship_period === "null" ? null : internship_period,
      name === "null" ? null : name,
      institution === "null" ? null : institution,
      address === "null" ? null : address,
      contactNumber === "null" ? null : contactNumber,
      description === "null" ? null : description,
      image || null,
      isActive === "true" ? true : false,
      deletedAt || null,
      id,
    ];

    const [result] = await dbPool.execute(SQLQuery, values);

    if (result.affectedRows === 0) {
      throw new Error(`User with ID ${id} not found`);
    }

    return { success: true, message: "User updated successfully" };
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error(error.message || "Failed to update user data");
  }
};

// const updateAccessToken = (token, id) => {
//   const SQLQuery = `
//         UPDATE user
//         SET token = ? WHERE id = ?
//     `;
//   const values = [token, id];
//   return dbPool.execute(SQLQuery, values);
// };

const remove = async (id) => {
  try {
    const SQLQuery = `
        DELETE FROM master_users WHERE id = ?
    `;
    const values = [id];
    console.log(SQLQuery, values);
    return dbPool.execute(SQLQuery, values);
  } catch (error) {
    console.error("Error in delete data", error);
    throw error;
  }
};

// const getUserByName = async (nama) => {
//   try {
//     const [hasil] = await dbPool.query(`SELECT * FROM user WHERE nama = ?`, [
//       nama,
//     ]);
//     return hasil;
//   } catch (error) {
//     console.error("Error in getUserByName ", error);
//     throw error;
//   }
// };

// const getUserByToken = async (token) => {
//   try {
//     const [hasil] = await dbPool.query(`SELECT * FROM user WHERE token = ?`, [
//       token,
//     ]);
//     return hasil;
//   } catch (error) {
//     console.error("Error in getUserByToken ", error);
//     throw error;
//   }
// };

// const getUserByEmail = async (email) => {
//   try {
//     const [hasil] = await dbPool.query(`SELECT * FROM user WHERE email = ?`, [
//       email,
//     ]);
//     return hasil;
//   } catch (error) {
//     console.error("Error in getUserByEmail ", error);
//     throw error;
//   }
// };

// const getUserByUsername = async (username) => {
//   try {
//     const [hasil] = await dbPool.query(
//       `SELECT * FROM user WHERE username = ?`,
//       [username]
//     );
//     return hasil;
//   } catch (error) {
//     console.error("Error in getUserByUsername ", error);
//     throw error;
//   }
// };

// const deleteUser = async (id) => {
//   try {
//     await dbPool.query("DELETE FROM user WHERE id = ?", [id]);
//   } catch (error) {
//     console.error("Error in deleteUser:", error);
//     throw error;
//   }
// };

export const User = {
  find,
  findById,
  create,
  findOne,
  changePassword,
  update,
  remove,
  findByName,
  findOneByNumberId,
};
