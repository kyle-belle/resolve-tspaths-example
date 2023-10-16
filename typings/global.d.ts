namespace NodeJS {
    interface ProcessEnv {
        // APP
        APP_URL: string
        // SERVER
        NODE_ENV: "development" | "production" | "testing";
        SERVER_PORT: string;
        HASHING_KEY: string;
        WEBSOCKET_PORT: string;
        // SESSION
        SESSION_SECRET: string;
        SESSION_NAME: string;
        // COOKIES
        COOKIE_SECRET: string;
        // DATABASE
        MYSQL_PORT: string;
        MYSQL_HOST: string;
        MYSQL_USER: string;
        MYSQL_DATABASE: string;
        MYSQL_PASSWORD: string;
        DATABASE_URL: string;
        // REDIS
        REDIS_NAME: string;
        REDIS_HOST: string;
        REDIS_PASSWORD: string;
        REDIS_PORT: string;
        REDIS_URL: string;
        // GOOGLE
        GOOGLE_OAUTH_TOKEN_URL: string;
        GOOGLE_OAUTH_USER_INFO_URL: string;
        GOOGLE_OAUTH_CLIENT_ID: string;
        GOOGLE_OAUTH_CLIENT_SECRET: string;
        GOOGLE_OAUTH_REDIRECT: string;
        // FACEBOOK
        FACEBOOK_OAUTH_TOKEN_URL: string;
        FACEBOOK_OAUTH_TOKEN_INSPECT_URL: string;
        FACEBOOK_OAUTH_USER_INFO_URL: string;
        FACEBOOK_OAUTH_CLIENT_ID: string;
        FACEBOOK_OAUTH_CLIENT_SECRET: string;
        FACEBOOK_OAUTH_REDIRECT: string;
        // APPLE
        APPLE_OAUTH_CLIENT_ID: string;
        APPLE_OAUTH_CLIENT_SECRET: string;
        APPLE_OAUTH_REDIRECT: string;
        // add more environment variables and their types here
    }
}