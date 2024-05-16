import { createClient } from 'redis';

export const client = createClient({
    password:process.env.REDIS_PASSWORD,
    socket: {
        host:process.env.REDIS_HOST,
        port:process.env.REDIS_PORT,
    }
});