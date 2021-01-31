module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "pw",
    DB: "admin_panel",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
