import { Alert, Box, FormControl, InputLabel, MenuItem, Paper, 
    TextField, TableBody, TableRow, Tooltip, Typography } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { TimePicker } from "@mui/x-date-pickers"
import { useState } from "react"
import dayjs from "dayjs"

export default function Part3() {

const [worksDate, setWorksDate] = useState()
const [startTime, setStartTime] = useState(dayjs('2022-04-17T00:00'))
const [endTime, setEndTime] = useState(dayjs('2022-04-17T00:00'))
const [area, setArea] = useState('')

    return(
        <Paper component='section' sx={{ 
            width: '40rem',
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 5,
            margin: 2 }} >
        <h3>Part 3 - Duration and Location of Work</h3> 
        
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Set the start and end date of the permit</Typography>  
            <Tooltip title='Duration of works'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>
        <br />
        <Box component="div"  sx={{display: 'inline-flex', mt: 2}}>
        <div>
        <InputLabel sx={{fontSize: 12}}>Start date</InputLabel>
        <FormControl required size='small' sx={{display: 'block', width: '11rem',
                ml: 0.5, mr: 0.5}}>
            <DatePicker value={worksDate}
            onChange={(e) => setWorksDate(e)}
            slotProps={{ textField: { size: 'small' } }} />
        </FormControl>
        </div>

        <div>
        <InputLabel sx={{fontSize: 12}}>Start time</InputLabel>
        <FormControl required size='small' sx={{display: 'block', width: '11rem',
                ml: 0.5, mr: 0.5}}>
            <TimePicker value={startTime} 
            slotProps={{ textField: { size: 'small' } }}
            onChange={(e) => setStartTime(e)} />
        </FormControl>
        </div>

            <Typography sx={{color:'rgba(0, 0, 0, 0.6)', fontSize: 'small', 
            height: '1rem', alignSelf: 'center'}}>
                To</Typography>
        
        <div>
        <InputLabel sx={{fontSize: 12}}>End time</InputLabel>
        <FormControl required size='small' sx={{display: 'block', width: '11rem',
                 ml: 0.5, mr: 0.5}}>
            <TimePicker value={endTime} 
            slotProps={{ textField: { size: 'small' } }}
            onChange={(e) => setEndTime(e)} />
        </FormControl>
        </div>
        </Box>

        <br /> <br />
        <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Set the designated area for the work</Typography>  
            <Tooltip title='Location'>
                <Alert variant='outlined' severity='info' 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>
        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
            <TextField
                select
                value={area}
                label='Select area'
                onChange={(e) => setArea(e.target.value)}
                sx={{width: '25rem'}}
                > 
                <MenuItem value="Hospital Block A">Hospital Block A</MenuItem>
                <MenuItem value="Hospital Block B">Hospital Block B</MenuItem>
                <MenuItem value="Hospital Block C">Hospital Block C</MenuItem>
                <MenuItem value="Hospital Block D">Hospital Block D</MenuItem>
            </TextField>
        </FormControl>
        </div>
        </Paper>
    )
}