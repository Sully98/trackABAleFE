'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/components/MediaCard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

export default function HomePage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ display: 'flex' }}>
      <div>
        <Button 
            sx={{
              position: 'relative',
              float: 'right'}} 
            variant="contained"
            href='http://localhost:3000/signin'
        >
          Login
        </Button>
        <Grid display="flex" justifyContent="center" alignItems="center" sx={{ minHeight: '30vh', fontSize:"100px" }}>
          <h1>trackABAle</h1>
        </Grid>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="What is ABA" />
          <Tab label="How we can help" />
          <Tab label="Learn" />
        </Tabs>
      
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid xs={6}>
            <MediaCard
              heading="Behavior Tracking"
              text="Here you will learn about how to track behavior and the different methods"
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="Field of ABA"
              text="Applied Behavioral Analysis"
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="Operational Definitions"
              text="How to write an operational Definition. There are two ways to define behaviors:
              Function-based 
              Topography-based
              
              A functional definition in ABA outlines a group of behaviors that have a common effect on the environment (function). In other words, the main goal of a functional definition is to comprehend why the behavior is occurring in a specific situation. This understanding is crucial for creating successful behavior intervention strategies that address the root causes of the behavior. 
              "
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="Collecting Data"
              text="We use different methods of data collection to easily identify and track behavior."
            />
          </Grid>
        </Grid>
      </div>
      
    </Box>
  );
}
