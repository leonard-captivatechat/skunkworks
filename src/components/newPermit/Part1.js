import { Alert, Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TableContainer,
    TableBody, TableRow, TextField, Tooltip, Typography, createTheme, Table} from "@mui/material"
import { useEffect, useState } from "react"
import Frank from '../../frank.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Part1(props) {

let users = props.users

const [organisationType, setOrganisationType] = useState('')
const [supplier, setSupplier] = useState('')
const [operators, setOperators] = useState([])
const [numOfSelectFields, setNumOfSelectFields] = useState(1)
const [respForHotWorks, setRespForHotWorks] = useState('')
const [respForFireSafety, setRespForFireSafety] = useState('')

const handleOrganisation = (e) => {
    setOrganisationType(e.target.value)
}

const handleSupplier = (e) => {
    setSupplier(e.target.value)
}

const handleOperator = (e, index) => {
    if (!operators.includes(e.target.value)) {
        const updatedOperators = [...operators]
        updatedOperators[index] = e.target.value
        setOperators(updatedOperators)
    } 
}

const addField = () => {
    setNumOfSelectFields(numOfSelectFields + 1)
}

const handleHotWorks = (e) => {
    setRespForHotWorks(e.target.value)
    console.log('organisation: ', e.target.value)
}

const handleFireSafety= (e) => {
    setRespForFireSafety(e.target.value)
    console.log('organisation: ', e.target.value)
}

console.log(users)
return(
    <Paper sx={{ 
            width: '40rem', 
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 5 }} 
            >
    <h3>Part 1 - Hot Works Permit Details</h3>

    <TableContainer>
        <Table>
    <TableBody>
        <TableRow sx={{height: '35px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Permit issuer</Typography>
            <Tooltip title='Full name of person issuing the permit'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
    </TableBody></Table>
    </TableContainer>

<Grid container spacing={2}>
    <Grid item xs={8}>    
        <Box component='section'
            sx={{bgcolor:'#f5f5f5', width:'23rem', padding: 2, height: '3rem',
            mt: 2, display: 'inline-flex', justifyContent: 'space-between'
        }}>

        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box>
            <img src={Frank} width={50} alt="User_image"></img>
            </Box>
            <Box sx={{mx: 1}}>  
                <Typography>{users[0].name} </Typography>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>
                    {users[0].position}</Typography>
            </Box>
        </Box>

            <Box sx={{width: '6rem', height: '1.8rem', bgcolor: '#4caf50', 
                borderRadius: 50, display: 'flex', justifyContent: 'center',
                alignItems: 'center'}}>
                    <CheckCircleIcon style={{fill: 'white', m: '0.5rem'}}></CheckCircleIcon>
                    <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', m: '0.5rem'}}>Verified</Typography>
            </Box>
        </Box>
    </Grid>
            
        <Grid item xs={4} sx={{alignSelf: 'center'}}>
            <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>
                Verified skills to manage Hot Works</Typography>
        </Grid>
</Grid>


        <Box>
        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem'}}>Select type of organisation</Typography>  
            <Tooltip title='Select the organisation type'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </Box>

        <FormControl required size='small' sx={{display: 'block',
                width: '25rem', mt: 2 }}>
        <InputLabel sx={{fontSize: 12, width: '100%'}}>Select type</InputLabel>
            <Select
            value={organisationType}
            onChange={handleOrganisation}
            sx={{width: '25rem'}}
            > 
                <MenuItem value='Supplier'>Supplier</MenuItem>
                <MenuItem value='Plumbing'>Plumbing</MenuItem>
                <MenuItem value='Carpentry'>Carpentry</MenuItem>         
            </Select>
        </FormControl>
        </Box>
             
        <Box>
        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem'}}>Assign a supplier to carry out the work</Typography>  
            <Tooltip title='Select the supplier'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </Box>

        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Verified supplier</InputLabel>
            <Select
            value={supplier}
            label='Verified supplier *'
            onChange={handleSupplier}
            sx={{width: '25rem'}}> 
                <MenuItem value='Ackrington Chambers'>Ackrington Chambers</MenuItem>
                <MenuItem value='Travis Perkins'>Travis Perkins</MenuItem>
                <MenuItem value='Wickes'>Wickes</MenuItem> 
            </Select>
        </FormControl>
        </Box>

        <Box>
        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem'}}>Assign operator(s) to carry out the work</Typography>  
            <Tooltip title='Select the supplier'>
                <Alert variant='outlined' severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </Box>

        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
        
        <InputLabel sx={{fontSize: 12}}>Select verified worker</InputLabel>
        {Array.from({length: numOfSelectFields}).map((_, index) => (
            <Select
                value={operators[index]}
                label='Select verified worker *'
                onChange={(e) => handleOperator(e, index)}
                sx={{width: '25rem', mt: 2}}
                > 
                <MenuItem value='Francis Golder (me)'>Francis Golder (me)</MenuItem>
                <MenuItem value='Jan Goldstein'>Jan Goldstein</MenuItem>
                <MenuItem value='Tilda Swinton'>Tilda Swinton</MenuItem>  
                <MenuItem value='Bill Nighy'>Bill Nighy</MenuItem>
                <MenuItem value='Ralph Fiennes'>Ralph Fiennes</MenuItem> 
            </Select>
        ))
        }
        
        <Box>
            <Button  variant='outlined' onClick={addField} sx={{my: 2}}>ADD ANOTHER +</Button>
        </Box>
            
        </FormControl>
        </Box>

        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for Hot Works</Typography>  
            <Tooltip title='Select the name of the person'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </Box>

        <Grid container spacing={2}>
            <Grid item  xs={8}>

        <FormControl required size='small' sx={{display: 'flex',
                width: '25rem', mt: 2 }}>
        <InputLabel sx={{fontSize: 12, width: '100%'}}>Select worker</InputLabel>
            <Select
            value={respForHotWorks}
            onChange={handleHotWorks}
            sx={{width: '25rem', height: '2.5rem'}}
            > 
            <MenuItem value='Helena Bonham Carter' sx={{justifyContent: 'space-between'}}>Helena Bonham Carter
                 <Box sx={{width: '6rem', height: '1.8rem', bgcolor: '#4caf50', 
                    borderRadius: 50, display: 'flex', justifyContent: 'center',
                    alignItems: 'center'}}>
                    <CheckCircleIcon style={{fill: 'white', m: '0.5rem'}}></CheckCircleIcon>
                    <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', m: '0.5rem'}}>Verified</Typography>
                  </Box> 
                
                </MenuItem>
            <MenuItem value='Bill Nighy' sx={{justifyContent: "space-between"}}>Bill Nighy
             <Box sx={{width: '6rem', height: '1.8rem', bgcolor: '#4caf50', 
                    borderRadius: 50, display: 'flex', justifyContent: 'center',
                    alignItems: 'center'}}>
                    <CheckCircleIcon style={{fill: 'white', m: '0.5rem'}}></CheckCircleIcon>
                    <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', m: '0.5rem'}}>Verified</Typography>
                  </Box> 
                </MenuItem>
            <MenuItem value='Ralph Fiennes' sx={{justifyContent: "space-between"}}>Ralph Fiennes
             <Box sx={{width: '6rem', height: '1.8rem', bgcolor: '#4caf50', 
                    borderRadius: 50, display: 'flex', justifyContent: 'center',
                    alignItems: 'center'}}>
                    <CheckCircleIcon style={{fill: 'white', m: '0.5rem'}}></CheckCircleIcon>
                    <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', m: '0.5rem'}}>Verified</Typography>
                  </Box> 
                </MenuItem>        
            </Select>
        </FormControl>
            </Grid>

            <Grid item xs={4} sx={{alignSelf: 'center'}}>
                <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>
                Verified skills to manage Hot Works</Typography> 
                </Grid>
        </Grid>

        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for Fire Safety</Typography>  
            <Tooltip title='Select the name of the person'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </Box>

        <Grid container spacing={2}>
            <Grid item  xs={8}>
        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
            value={respForFireSafety}
            label='Select verified worker *'
            onChange={handleFireSafety}
            sx={{width: '25rem'}}> 
                <MenuItem value='Jan Goldstein' sx={{justifyContent: "space-between"}}>Jan Goldstein
                <Box sx={{width: '6rem', height: '1.8rem', bgcolor: '#4caf50', 
                    borderRadius: 50, display: 'flex', justifyContent: 'center',
                    alignItems: 'center'}}>
                    <CheckCircleIcon style={{fill: 'white', m: '0.5rem'}}></CheckCircleIcon>
                    <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', m: '0.5rem'}}>Verified</Typography>
                  </Box> 
                </MenuItem>
                <MenuItem value='Tilda Swinton' sx={{justifyContent: "space-between"}}>Tilda Swinton
                <Box sx={{width: '6rem', height: '1.8rem', bgcolor: '#4caf50', 
                    borderRadius: 50, display: 'flex', justifyContent: 'center',
                    alignItems: 'center'}}>
                    <CheckCircleIcon style={{fill: 'white', m: '0.5rem'}}></CheckCircleIcon>
                    <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', m: '0.5rem'}}>Verified</Typography>
                  </Box> 
                </MenuItem>
                <MenuItem value={users[1]} sx={{justifyContent: "space-between"}}>Bill Nighy<Box sx={{width: '6rem', height: '1.8rem', bgcolor: '#4caf50', 
                    borderRadius: 50, display: 'flex', justifyContent: 'center',
                    alignItems: 'center'}}>
                    <CheckCircleIcon style={{fill: 'white', m: '0.5rem'}}></CheckCircleIcon>
                    <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', m: '0.5rem'}}>Verified</Typography>
                  </Box> 
                </MenuItem> 
            </Select>
        </FormControl>
            </Grid>
        
        <Grid item xs={4} sx={{alignSelf: 'center'}}>
                <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>
                Verified skills for Hot Works Fire Safety</Typography> 
                </Grid>
        
        </Grid>


        </Paper>
    )
}