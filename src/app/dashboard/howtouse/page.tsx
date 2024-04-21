import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { tbRedirect, makeTabList } from '@/lib/dynTabs';
import DynToolBar from '@/components/dynToolBar';

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
			<Box component="main" sx={{ position: 'relative', flexGrow: 1, p: 3 }}>
				<Toolbar />
				<Typography paragraph>
					How to use this page:
				</Typography>
				<Divider></Divider>
				<Typography paragraph>
					To start a new data collection entry,  you will select the tab on
					the left that says "New +". From here, there are many different
					data collection forms to chose from! You will be presented with the
					what type of data collection you would like to do, then you can give
					it a name and you must specify the range of dates that you are
					interested in tracking behavior. After completing the form and pressing the
					"Submit" button, you will have a new tab generated for you that will
					have the new table ready to be filled out. To the right of this table
					is an interactive chart. The chart will be automatically be updated based
					on your input.
				</Typography>
				<Typography paragraph>
					*Insert Pictures of examples below*
				</Typography>
			</Box>
		</Box>
	);
}