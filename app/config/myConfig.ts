import dotenv from "dotenv";

dotenv.config();

const myConfig = {
  nexonOpenApi: {
    characterName: process.env.CHARACTER_NAME,
    url: "https://open.api.nexon.com",
    apiKey: process.env.X_NXOPEN_API_KEY,
  },
};

export default myConfig;
