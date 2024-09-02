import { Router } from "express";
import signUp from "../../controllers/users/signUp";

const userRouters: Router = Router();

userRouters.post('/register', signUp);

export default userRouters;