'use server'
import * as React from 'react';
import Box from '@mui/material/Box';
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export async function makeTabList() {
    var redirects = ['/dashboard/howtouse', '/dashboard/newTable']
    const session = await getServerSession(authConfig);

    const email = session?.user?.email!

    const user = await prisma.user.findUnique({ where: { email: email } })
    if (!user) {
        redirect('/');
    }
    const ertables = await prisma.erTable.findMany({ where: { authorId: user?.id } })
    console.log(ertables)
    ertables.forEach((element) => {
        redirects.push('/dashboard/' + element.name);
    });
    console.log(redirects)
    return redirects
}

export async function tbRedirect(index: number) {
    console.log(await makeTabList(), index, ' in dynTabs')
    const l = await makeTabList()
    console.log(l[index])
    redirect(l[index]);
}
