import * as dotenv from "dotenv";
import dotEnvExpand from "dotenv-expand";

const myEnv = dotenv.config({path: __dirname+"/../../.env"});
dotEnvExpand.expand(myEnv);

const getConfig = () => {
    return {
        APP_URL: process.env.APP_URL,
        NODE_ENV: process.env.NODE_ENV,
        SERVER_PORT: process.env.SERVER_PORT,
        REDIS_NAME: process.env.REDIS_NAME,
        REDIS_HOST: process.env.REDIS_HOST,
        REDIS_PASSWORD: process.env.REDIS_PASSWORD,
        REDIS_PORT: process.env.REDIS_PORT,
        REDIS_URL: process.env.REDIS_URL,
    };
  };

  type Env = ReturnType<typeof getConfig>;
  
  // Throwing an Error if any field was undefined we don't 
  // want our app to run if it can't connect to DB and ensure 
  // that these fields are accessible. If all is good return
  // it as Config which just removes the undefined from our type 
  // definition.
  
const getSanitzedConfig = (config: Env) => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
        throw new Error(`Missing key ${key} in config.env`);
        }
    }

    return config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;