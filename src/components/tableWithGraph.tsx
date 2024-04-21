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
import { DataGrid, GridColDef, GridValueGetterParams, GridRowId } from '@mui/x-data-grid';
import { LineChart } from '@mui/x-charts/LineChart';

const drawerWidth = 180;

export default function TableWithGraph({ tablist }: { tablist: any }) {
    console.log(tablist)
    return (
        <Box>
        </Box>
        /*<Box display="flex" component="main" sx={{ position: 'relative', flexGrow: 1, p: 5 }}>
            
            <DataGrid
                rows={rows}
                columns={columns}
                onSelectionModelChange={(newSelectionModel) => {
                setSelectionModel(newSelectionModel);
                }}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            
        </Box>
        <Box display="flex" component="main" sx={{ position: 'relative', flexGrow: 1, p: 5 }}>
        
            <LineChart
                xAxis={[{ data: extractListFromDict(initialRows, "date") }]}
                yAxis={[
                { id: 'linearAxis', scaleType: 'linear' },
                { id: 'logAxis', scaleType: 'log' },
                ]}
                series={[
                { yAxisKey: 'linearAxis', data: extractListFromDict(initialRows, "total"), label: 'linear' },
                { yAxisKey: 'logAxis', data: extractListFromDict(initialRows, "total"), label: 'log' },
                ]}
                leftAxis="linearAxis"
                rightAxis="logAxis"
                height={400}
            />
        </Box>
        */
    );
}