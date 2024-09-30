import { Sequelize } from "sequelize";

const POSTGRES_URL = process.env.POSTGRES_URL || "default_value_here";

const sequelize = new Sequelize(POSTGRES_URL, {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  logging: false,
});

export default sequelize;
