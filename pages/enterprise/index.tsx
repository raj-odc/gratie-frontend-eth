import { useState } from "react";
import Section1 from "./1";
import Section2 from "./2";
import Section3 from "./3";
import Section4 from "./4";
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid'

export default function Company(){
    const [option, setOption] = useState(1);
    return(
        <div>
            <div>
            <div className='navButtons'>
             <Grid container spacing={1} sx={{mb: 5 }}>
                <Grid item xs={12} md={3}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} onClick={e => setOption(1)}> Subscription </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} onClick={e => setOption(2)}> Profile </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} onClick={e => setOption(3)}> User Request </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} onClick={e => setOption(4)}> Issue Reward </Button>
                </Grid>
            </Grid>
        </div>
        <div className="enterprise">
            {option == 1 ? <Section1 /> : option == 2 ? <Section2/> : 
            option ==3? <Section3/> : <Section4/> }
        </div>
            </div>
        </div>
    );
}