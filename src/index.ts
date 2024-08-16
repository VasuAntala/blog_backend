import express from 'express';
// import * as packageInfo from "./../package.json";
import  router  from './routes';
import { mongooseConnection } from './database/connection/db';

const app = express();
app.use(express.json());
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });
// router.use(connectDB);
app.use(mongooseConnection);
app.use(router);

export default app