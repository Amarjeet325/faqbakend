// import { createClient } from 'redis';

// const client = createClient({
//     username: 'default',
//     password: process.env.REDIS_PASSWORD,
//     socket: {
//         host: process.env.REDIS_URL ? new URL(process.env.REDIS_URL).hostname : 'localhost',
//         port: 13026
//     }
// });

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar

// module.exports = client;

const { createClient } = require("redis");

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("connect", () => console.log("Redis Connected"));
redisClient.on("error", (err) => console.log("Redis Error:", err));

redisClient.connect();

module.exports = redisClient;
