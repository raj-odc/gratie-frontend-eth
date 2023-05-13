import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import Upload from '@mui/icons-material/Upload';
import Box from '@mui/material/Box'
import { useState } from 'react';

export default function Section3() {
    const [showCompany, setShowCompany] = useState(true);
    return (
        <div>
            <div>
                {showCompany ? 
                <Grid container spacing={1} sx={{mb: 5 }}>
                <Grid item xs={12} md={2}>
                <div className='price-div-options'>
                <br/>
                <Button variant='contained' className="social-button" sx={{marginBottom:'80px'}} style={{background: 'radial-gradient( rgba(0, 255, 0, 0.529), #040404)'}}> Company Details </Button>
                <br/>
                <Button variant='contained' className="social-button" onClick={e => setShowCompany(false)}> Token Details </Button>
                </div>
                </Grid>
                <Grid item xs={12} md={10}>
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
                  Company Name
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
    
            <Grid container spacing={1} sx={{mb: 5 }}>
                <Grid item xs={12} md={6}>
                <Typography
                  noWrap
                  variant="h6"
                  className='form-label'>
                  Company Email
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
    
            <Grid container spacing={1} sx={{ mb: 5 }}>
                <Grid item xs={12} md={6}>
                <Typography
                  noWrap
                  variant="h6"
                  className='form-label'>
                  Company
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
                <Grid item xs={12} md={2}>
                    
                </Grid>
            </Grid>

            <Grid container spacing={1} sx={{mb: 5 }}>
                <Grid item xs={12} md={6}>
                <Typography
                  noWrap
                  variant="h6"
                  className='form-label'>
                  Valuation Proof
                </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                <Button variant='contained' className='form-upload-button'><Upload sx={{color:'#56e456'}} /></Button>
                </Grid>
            </Grid>
            <Button variant='contained' className='form-wallet-button'> Submit </Button>
          </form>
        </CardContent>
        </Container>
        </Box>
                </Grid>
            </Grid> :
            <Grid container spacing={1} sx={{mb: 5 }}>
            <Grid item xs={12} md={2}>
            <div className='price-div-options'>
            <br/>
            <Button variant='contained' className="social-button" sx={{marginBottom:'80px'}} onClick={e => setShowCompany(true)}> Company Details </Button>
            <br/>
            <Button variant='contained' className="social-button" style={{background: 'radial-gradient( rgba(0, 255, 0, 0.529), #040404)'}}> Token Details </Button>
            </div>
            </Grid>
            <Grid item xs={12} md={10}>
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
              Token Name
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

        <Grid container spacing={1} sx={{mb: 5 }}>
            <Grid item xs={12} md={6}>
            <Typography
              noWrap
              variant="h6"
              className='form-label'>
              Token Symbol
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

        <Grid container spacing={1} sx={{ mb: 5 }}>
            <Grid item xs={12} md={6}>
            <Typography
              noWrap
              variant="h6"
              className='form-label'>
              Company
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
            <Grid item xs={12} md={2}>
                
            </Grid>
        </Grid>

        <Grid container spacing={1} sx={{mb: 5 }}>
            <Grid item xs={12} md={6}>
            <Typography
              noWrap
              variant="h6"
              className='form-label'>
              Token Logo
            </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
            <Button variant='contained' className='form-upload-button'><Upload sx={{color:'#56e456'}} /></Button>
            </Grid>
        </Grid>
        <Button variant='contained' className='form-wallet-button'> Generate Token </Button>
      </form>
    </CardContent>
    </Container>
    </Box>
            </Grid>
        </Grid>}
            </div>
        </div>
      )
}