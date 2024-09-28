const timestamps = (schema) => {
  schema.pre("save", function (next) {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    next();
  });
};

export default timestamps;
