import dbPool from "../connection.js";
import bcrypt from "bcrypt";

const find = () => {
  const SQLQuery = "SELECT * FROM user_attendance";
  return dbPool.execute(SQLQuery);
};

const populate = () => {
  const SQLQuery = `
    SELECT 
      user_attendance.id AS attendanceId, 
      user_attendance.userId, 
      user_attendance.status, 
      user_attendance.checkInTime, 
      user_attendance.checkOutTime,
      master_users.id AS userId,
      master_users.name,
      master_users.email
    FROM user_attendance
    JOIN master_users ON user_attendance.userId = master_users.id
  `;
  return dbPool.execute(SQLQuery);
};

const findById = async (id) => {
  try {
    const result = await dbPool.query(
      "SELECT * FROM user_attendance WHERE id = ?",
      [id]
    );
    return result[0];
  } catch (error) {
    console.error("Error in get attendance:", error);
    throw error;
  }
};

const findOne = async (data) => {
  try {
    const [value] = Object.keys(data);
    const result = await dbPool.query(
      `SELECT * FROM user_attendance WHERE ${value} = ?`,
      [data[value]]
    );
    console.log(result);
    return result[0];
  } catch (error) {
    console.error("Error in get attendance:", error);
    throw error;
  }
};

const create = ({ data }) => {
  console.log(data);
  const { userId, status, notes, fileUrl, isLate, checkInTime, deviceId } =
    data;
  const SQLQuery = `
        INSERT INTO user_attendance (userId, status, notes, fileUrl, isLate, checkInTime, deviceId) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  const values = [
    userId,
    status,
    notes,
    fileUrl,
    isLate,
    checkInTime,
    deviceId,
  ];
  return dbPool.execute(SQLQuery, values);
};

const update = async ({ id, data }) => {
  // console.log(data);
  try {
    const { status, notes, fileUrl } = data;

    const SQLQuery = `
      UPDATE user_attendance
      SET 
        status = ?, 
        notes = ?, 
        fileUrl = ?
      WHERE id = ?
    `;

    const values = [status, notes, fileUrl, id];

    return dbPool.execute(SQLQuery, values);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user attendance");
  }
};

const updateCheckOut = async ({ userId }) => {
  try {
    const SQLQuery = `
      UPDATE user_attendance
      SET 
        checkOutTime = ? 
      WHERE userId = ?
    `;

    const values = [Date.now(), userId];
    return dbPool.execute(SQLQuery, values);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user attendance");
  }
};

const remove = (id) => {
  try {
    const SQLQuery = `
        UPDATE user_attendance
        SET deletedAt = ${Date.now()} WHERE id = ?
    `;
    const values = [id];
    return dbPool.execute(SQLQuery, values);
  } catch (error) {
    console.error("Error in delete data ", error);
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

export const Attendance = {
  find,
  findById,
  create,
  findOne,
  updateCheckOut,
  update,
  remove,
  populate,
};
