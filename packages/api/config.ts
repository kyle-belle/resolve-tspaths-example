import * as dotenv from "dotenv";
import dotEnvExpand from "dotenv-expand";

const myEnv = dotenv.config({path: __dirname+"/../../.env"});
dotEnvExpand.expand(myEnv);

const getConfig = () => {
    return {
        APP_URL: process.env.APP_URL,
        NODE_ENV: process.env.NODE_ENV,
        SERVER_PORT: process.env.SERVER_PORT,
        HASHING_KEY: process.env.HASHING_KEY,
        SESSION_SECRET: process.env.SESSION_SECRET,
        SESSION_NAME: process.env.SESSION_NAME,
        WEBSOCKET_PORT: process.env.WEBSOCKET_PORT,
        COOKIE_SECRET: process.env.COOKIE_SECRET,
        MYSQL_PORT: process.env.MYSQL_PORT,
        MYSQL_HOST: process.env.MYSQL_HOST,
        MYSQL_USER: process.env.MYSQL_USER,
        MYSQL_DATABASE: process.env.MYSQL_DATABASE,
        MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
        DATABASE_URL: process.env.DATABASE_URL,
        REDIS_NAME: process.env.REDIS_NAME,
        REDIS_HOST: process.env.REDIS_HOST,
        REDIS_PASSWORD: process.env.REDIS_PASSWORD,
        REDIS_PORT: process.env.REDIS_PORT,
        REDIS_URL: process.env.REDIS_URL,
        GOOGLE_OAUTH_TOKEN_URL: process.env.GOOGLE_OAUTH_TOKEN_URL,
        GOOGLE_OAUTH_USER_INFO_URL: process.env.GOOGLE_OAUTH_USER_INFO_URL,
        GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
        GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        GOOGLE_OAUTH_REDIRECT: process.env.GOOGLE_OAUTH_REDIRECT,
        FACEBOOK_OAUTH_TOKEN_URL: process.env.FACEBOOK_OAUTH_TOKEN_URL,
        FACEBOOK_OAUTH_TOKEN_INSPECT_URL: process.env.FACEBOOK_OAUTH_TOKEN_INSPECT_URL,
        FACEBOOK_OAUTH_USER_INFO_URL: process.env.FACEBOOK_OAUTH_USER_INFO_URL,
        FACEBOOK_OAUTH_CLIENT_ID: process.env.FACEBOOK_OAUTH_CLIENT_ID,
        FACEBOOK_OAUTH_CLIENT_SECRET: process.env.FACEBOOK_OAUTH_CLIENT_SECRET,
        FACEBOOK_OAUTH_REDIRECT: process.env.FACEBOOK_OAUTH_REDIRECT,
        APPLE_OAUTH_CLIENT_ID: process.env.APPLE_OAUTH_CLIENT_ID,
        APPLE_OAUTH_CLIENT_SECRET: process.env.APPLE_OAUTH_CLIENT_SECRET,
        APPLE_OAUTH_REDIRECT: process.env.APPLE_OAUTH_REDIRECT
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