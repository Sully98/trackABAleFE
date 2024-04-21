import * as React from 'react';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import CssBaseline from '@mui/material/CssBaseline';
import { tbRedirect, makeTabList } from '@/lib/dynTabs';
import DynToolBar from '@/components/dynToolBar';
import NewTableForm from '@/components/newTableForm';
const drawerWidth = 180;

export default async function Page() {
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
      <NewTableForm />
    </Box>
  );
}