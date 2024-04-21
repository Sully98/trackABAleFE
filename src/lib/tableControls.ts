'use server'
import { authConfig, loginIsRequiredServer } from "@/lib/auth";

import prisma from "@/lib/prisma";
import { FormEvent } from 'react'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function createTable(name: string, type: string) {

    const session = await getServerSession(authConfig);

    const email = session?.user?.email!

    const oldUser = await prisma.user.findUnique({ where: { email: email } })
    const user = oldUser
    console.log(user?.id)
    /*await prisma.erTable.create({
        data: {
            'name': name,
            'authorId': user?.id,
            'tableType': type
        }
    })*/
    redirect('/dashboard/' + name)

    return 'done'
}