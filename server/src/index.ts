import express, {Express, Request, Response} from "express";
import {config} from "dotenv";

config();

const port = process.env.PORT || 3000;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);;
});
