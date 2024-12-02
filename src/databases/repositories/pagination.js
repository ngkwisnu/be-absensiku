import mysql from "mysql2/promise";

export const pagination = async ({ query }, connection, tableName) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const startIndex = (page - 1) * limit;

  // Menghitung total record
  const [totalResult] = await connection.execute(
    `SELECT COUNT(*) AS total FROM ${tableName}`
  );
  const total = totalResult[0].total;

  console.log(
    `SELECT * FROM ${tableName} WHERE deletedAt IS NULL AND isActive = TRUE LIMIT ?, ?`,
    [startIndex, limit]
  );

  // Mengambil data dengan batasan dan offset
  const [list] = await connection.execute(
    `SELECT * FROM ${tableName} LIMIT ${startIndex}, ${limit}`
  );

  return {
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
    data: list,
  };
};
