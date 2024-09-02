import express, { Request, Response } from 'express';
import { configDotenv } from 'dotenv';
configDotenv();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Olá Doa Aqui!');
});

app.listen(port, () => {
	console.log(`Project running on port ${port}`);
});