'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { tbRedirect } from '@/lib/dynTabs';
const drawerWidth = 180;

export default function DynToolBar({ tablist }: { tablist: any }) {
    console.log(tablist)
    return (

        <Drawer
            variant="permanent"
            sx={{

                width: drawerWidth,
                flexShrink: 0,
                '.MuiDrawer-paper': {
                    position: 'relative',
                    top: 'auto', // Adjust top position to be below AppBar and Tabs
                    width: drawerWidth,
                    boxSizing: 'border-box'
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {tablist.map((text: string, index: number) => (
                        <ListItem key={text} disablePadding onClick={() => tbRedirect(index)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Box>
        </Drawer>
    );
}