'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTable } from '@/lib/tableControls';
import { FormEvent } from 'react'

export default function NewTableForm() {
    const [dataTakingName, setDataTakingName] = React.useState('');
    const [dataTakingType, setDataTakingType] = React.useState('');


    async function onSubmit() {
        console.log(dataTakingName, dataTakingType)
        const resp = await createTable(dataTakingName, dataTakingType)

    }

    return (
        <Box>

            <form action={onSubmit}>
                <InputLabel id="demo-simple-select-label">Data Collection Method </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dataTakingType}
                    label="dataTakingType"
                    onChange={e => setDataTakingType(e.target.value as string)}
                >
                    <MenuItem value={"EventRecording"}>Event Recording</MenuItem>
                    <MenuItem value={"EventRecording"}>Frequency Tracking</MenuItem>
                </Select>
                <br></br>
                <TextField
                    id="data-taking-name"
                    label="Name of Behavior"
                    variant="outlined"
                    onChange={e => setDataTakingName(e.target.value as string)}
                />
                <Button type='submit'>Make New Table!</Button>
            </form>
        </Box>

    );
}