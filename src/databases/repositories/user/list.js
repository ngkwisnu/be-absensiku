import dbPool from "../../connection.js";
import { pagination } from "../pagination.js";

const list_user_repository_func = async ({ query }) => {
  if (!query.name) {
    // Jika tidak ada parameter `name`, gunakan fungsi pagination
    const data = await pagination({ query }, dbPool, "master_users");
    return data;
  }

  // Jika ada parameter `name`, buat query untuk mencari data
  const { name } = query;
  try {
    const [rows] = await dbPool.execute(
      `SELECT * FROM master_users WHERE name LIKE ?`,
      [`%${name}%`] // Menggunakan parameterized query untuk menghindari SQL injection
    );
    return rows.length ? rows[0] : null; // Mengembalikan data pertama atau null jika tidak ada hasil
  } catch (error) {
    console.error("Error fetching user by name:", error);
    throw new Error("Failed to fetch user by name");
  }
};

export default list_user_repository_func;
