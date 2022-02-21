import express, { Request, Response, Application } from 'express'
import cors from "cors"
import bodyParser from 'body-parser';

export default (root: string, routes: any) => {
    const app: Application = express();

    app.use(root, routes)
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

    return app
}