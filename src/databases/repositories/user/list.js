import dbPool from "../../connection.js";
import { pagination } from "../pagination.js";

const list_user_repository_func = async ({ query }) => {
  if (!query.name) {
    // Jika tidak ada parameter `name`, gunakan fungsi pagination
    const data = await pagination({ query }, dbPool, "master_users");
    data.data = data.data.map((el) => {
      el.id || null,
        el.number_id || null,
        el.password || null,
        el.email || null,
        el.internship_period || null,
        el.name || null,
        el.institution || null,
        el.address || null,
        el.contactNumber || null,
        el.description || null,
        el.isActive === 1 ? true : false,
        el.deletedAt || null,
        (el.image = el.image
          ? el.image
          : "https://88gzhtq3-8000.asse.devtunnels.ms/api/v1/files/profile-circle-icon-1024x1024-qv2gufvw (1).png");
      return el;
    });
    console.log(data.data);
    return data;
  }

  // Jika ada parameter `name`, buat query untuk mencari data
  const { name } = query;
  try {
    let [rows] = await dbPool.execute(
      `SELECT * FROM master_users WHERE deletedAt IS NULL AND isActive = TRUE AND name LIKE ?`,
      [`%${name}%`] // Menggunakan parameterized query untuk menghindari SQL injection
    );
    rows = rows.map((el) => {
      el.id || null,
        el.number_id || null,
        el.password || null,
        el.email || null,
        el.internship_period || null,
        el.name || null,
        el.institution || null,
        el.address || null,
        el.contactNumber || null,
        el.description || null,
        el.isActive === 1 ? true : false,
        el.deletedAt || null,
        (el.image = el.image
          ? el.image
          : "https://88gzhtq3-8000.asse.devtunnels.ms/api/v1/files/profile-circle-icon-1024x1024-qv2gufvw (1).png");
      return el;
    });
    return rows.length ? rows : null; // Mengembalikan data pertama atau null jika tidak ada hasil
  } catch (error) {
    console.error("Error fetching user by name:", error);
    throw new Error("Failed to fetch user by name");
  }
};

export default list_user_repository_func;
