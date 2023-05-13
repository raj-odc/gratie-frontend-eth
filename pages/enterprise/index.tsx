import Section1 from "./1";
import Section2 from "./2";
import Section3 from "./3";
import Section4 from "./4";
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid'

export default function Company(){
    return(
        <div>
            <div>
            <div className='navButtons'>
             <Grid container spacing={1} sx={{mb: 5 }}>
                <Grid item xs={12} md={3}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} > Subscription </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} > Profile </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} > User Request </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} > Issue Reward </Button>
                </Grid>
            </Grid>
        </div>
            </div>
        </div>
    );
}