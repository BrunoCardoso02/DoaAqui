import express, { Request, Response } from 'express';
import { PORT } from './secrets';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Olá Doa Aqui!');
});

app.listen(PORT, () => {
	console.log(`Project running on port ${PORT}`);
});