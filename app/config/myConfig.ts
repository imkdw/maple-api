import dotenv from "dotenv";
import Joi from "joi";

dotenv.config();

const schema = Joi.object({
  X_NXOPEN_API_KEY: Joi.string().required(),
  CHARACTER_NAME: Joi.string().required(),
}).unknown(false);

const { error, value } = schema.validate(process.env);

if (error && !error.message.includes("ALLUSERSPROFILE")) {
  console.error("유효성 검사 실패:", error.details);
}

const myConfig = {
  nexonOpenApi: {
    characterName: value.CHARACTER_NAME,
    url: "https://open.api.nexon.com",
    apiKey: value.X_NXOPEN_API_KEY,
  },
};

export default myConfig;
