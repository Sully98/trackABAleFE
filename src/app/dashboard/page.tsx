import * as React from 'react';
import Box from '@mui/material/Box';
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
    await loginIsRequiredServer();

    const session = await getServerSession(authConfig);

    const email = session?.user?.email!

    const oldUser = await prisma.user.findUnique({ where: { email: email } })
    const user = oldUser
    if (!oldUser) {
        const newUser = await prisma.user.create({
            data: {
                email: email
            },
        });
        const user = newUser
    }
    await wait(1000);
    console.log(prisma.erTable.findMany())
    const ertables = prisma.erTable.findMany({ where: { authorId: user?.id } })
    console.log(ertables)
    console.log(user)
    return (
        <>
            <Box>
                {session?.user?.image && <img src={session?.user?.image} alt="" />}
                <h3>Welcome: {email}</h3>
                <Typography>Supervisor: {user?.supervisor}</Typography>
                <Typography>Tasks: {user?.tasks}</Typography>
                <Typography>What to track: {user?.whatToTrack}</Typography>
                <br></br>

            </Box>
        </>
    );
}