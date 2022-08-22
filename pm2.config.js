module.exports = {
  apps: [
    {
      name: "http-api",
      instances: -1,
      exec_mode: "cluster",
      watch: true,
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
