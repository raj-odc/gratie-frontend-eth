import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { Container, InputLabel, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react';

export default function Section2() {
    const [data, setData] = useState<string[]>([])
    return (
        <Box className="reward-box" sx={{ mt: 18, ml:10 }}>
        <Container>
            <CardContent>
            <Typography variant='h5' style={{textAlign:'center', marginTop:'10px'}}>XXX REWARD</Typography>
          <form className='form'>
            <Grid container spacing={1} sx={{ mt: 5, mb: 5 }}>
                <Grid item xs={12} md={6}>
                <Typography
                  noWrap
                  variant="h6"
                  className='form-label'>
                  XXX Token
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                <Button variant='contained' className='reward-btn'> Claim </Button>
                </Grid>
            </Grid>
          </form>
        </CardContent>
        </Container>
        </Box>
      )
}