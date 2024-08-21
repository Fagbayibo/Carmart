/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://carmart_db_owner:MGIqB3rgVei6@ep-twilight-hat-a5yzha7i.us-east-2.aws.neon.tech/carmart_db?sslmode=require',
    }
  };