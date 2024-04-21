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
import { redirect } from 'next/navigation'

var addresses = ['http://localhost:3000/dashboard', 'http://localhost:3000/eaten', 'http://localhost:3000/newTable']

var redirects = ['/dashboard', '/dashboard/howtouse']

const tabRedirect = (index: number) => {
    console.log(redirects[index])
    window.location.href = redirects[index]; // or history.push(url) for internal navigation
};

const handleNavigation = (index: number) => {
    console.log(addresses[index])
    window.location.href = addresses[index]; // or history.push(url) for internal navigation
};
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        tabRedirect(newValue);
    };
    return (
        <section>
            <Box>
                <div>
                    <nav></nav>
                    <Grid display="flex" justifyContent="center" alignItems="center" sx={{ minHeight: '20vh', fontSize: "80px" }}>
                        <h1>trackABAle</h1>
                    </Grid>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Home" {...a11yProps(0)} />
                        <Tab label="Data" {...a11yProps(1)} />
                    </Tabs>
                    <Grid display="flex" justifyContent="center" alignItems="center" sx={{ minHeight: '30vh', fontSize: "20px" }}>
                        {children}
                    </Grid>

                </div>
            </Box>
        </section>
    );
}