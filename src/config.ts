export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: process.env.DATABASE || "mongo",
};
