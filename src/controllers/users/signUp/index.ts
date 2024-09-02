import { Request, Response } from "express";
import { prisma } from "../../../database";
import { hashSync } from "bcrypt";

const signUp = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await prisma.user.findUnique({ where: { email } });
        if (userExists) {
            return res.status(409).json({
                error: true,
                message: 'Usuário já criado!'
            });
        }
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashSync(password, 10)
            }
        });
        return res.status(201).json({
            error: false,
            message: 'Usuário cadastrado!',
            newUser
        });

    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

export default signUp;
