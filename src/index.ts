import express, { Request, Response } from 'express';
import { PORT } from './secrets';
import userRouters from './routes/users';

const app = express();

app.use(express.json());
app.use('/api', userRouters);
app.get('/', (req: Request, res: Response) => {
	res.send('Olá Doa Aqui!');
});

app.listen(PORT, () => {
	console.log(`Project running on port ${PORT}`);
});