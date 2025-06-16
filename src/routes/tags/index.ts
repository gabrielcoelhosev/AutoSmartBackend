import { Router } from "express";
import { postTag } from "./postTag";
import { getTags } from "./getTag";

const app = Router();

app.get('/', getTags);
app.post('/', postTag);

export default app;