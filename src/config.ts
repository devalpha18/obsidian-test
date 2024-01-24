interface Config {
  API_KEY: string;
  HTTPS: string;
  HTTP: string;
}

const config: Config = {
  API_KEY: process.env.API_KEY || "",
  HTTPS: process.env.HTTPS || "",
  HTTP: process.env.HTTP || "",
};

export default config;
