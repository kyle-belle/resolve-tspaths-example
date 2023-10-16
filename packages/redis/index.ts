import config from "./config"
import {Redis} from "ioredis";

export const redis = new Redis(config.REDIS_URL);

redis.on("connect", () => {
    console.log(`Connected to redis at: ${config.REDIS_HOST}:${config.REDIS_PORT}`);
})

redis.on('error', (e) => {
    console.log('Redis error:', e);
});