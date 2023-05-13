import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { Container, InputLabel, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import { useState } from 'react';

export default function Section3() {
    const [data, setData] = useState<string[]>([])
    return (
        <Box className="form-box" sx={{ mt: 18, ml:10 }}>
        <Container>
            <CardContent>
          <form className='form'>
            <Grid container spacing={1} sx={{ mt: 5, mb: 5 }}>
                <Grid item xs={12} md={6}>
                <Typography
                  noWrap
                  variant="h6"
                  className='form-label'>
                  Name
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type='text'
                  autoComplete='off'
                  value="Mr.XXX"
                  className='form-textfield'
                  focused sx={{ input: {color:'#fff', fontSize:'20px'}}}
                />
                </Grid>
            </Grid>
    
            <Grid container spacing={1} sx={{ mb: 5 }}>
                <Grid item xs={12} md={6}>
                <Typography
                  noWrap
                  variant="h6"
                  className='form-label'>
                  Reward
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Select</InputLabel>
                <Select
                  multiple
                  value={data}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='X'>X</MenuItem>
                  <MenuItem value='Y'>Y</MenuItem>
                  <MenuItem value='Z'>Z</MenuItem>
                </Select>
              </FormControl>
                </Grid>
                <Grid item xs={12} md={2}>
                    
                </Grid>
            </Grid>

            <Grid container spacing={1} sx={{mb: 5 }}>
                <Grid item xs={12} md={6}>
                <Typography
                  noWrap
                  variant="h6"
                  className='form-label'>
                  Earned NFTs
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type='text'
                  autoComplete='off'
                  required
                  className='form-textfield'
                  focused sx={{ input: {color:'#fff', fontSize:'20px'}}}
                />
                </Grid>
            </Grid>
          </form>
        </CardContent>
        </Container>
        </Box>
      )
}