import prisma from "@/lib/prisma";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import CssBaseline from '@mui/material/CssBaseline';
import { tbRedirect, makeTabList } from '@/lib/dynTabs';
import DynToolBar from '@/components/dynToolBar';
import NewTableForm from '@/components/newTableForm';
import TableWithGraph from "@/components/tableWithGraph";
const drawerWidth = 180;


interface PageProps {
    params: any;
}

export default async function Page({ params }: PageProps) {
    const { tableId } = params;

    const erTables = await prisma.erTable.findFirst({
        where: { id: tableId },
    });

    if (!erTables) return notFound();
    const tablist = await makeTabList()
    return (
        <Box
        display="flex"
        component="main"
        sx={{
            flexGrow: 1,
            p: 3,
            position: 'relative', // Important for positioning the Drawer
        }}
        >
        <CssBaseline />
        <DynToolBar tablist={tablist} />
        <Box> hey </Box>
        </Box>
    );
        
}