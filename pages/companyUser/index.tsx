import { Button } from '@mui/material';
import Grid from '@mui/material/Grid'
import { useState } from 'react';
import Section1 from './1';
import Section2 from './2';
import Section3 from './3';

export default function Company(){
    const [option, setOption] = useState(1);
    return(
        <div>
            <div>
            <div className='navButtons'>
             <Grid container spacing={1} sx={{mb: 5 }}>
                <Grid item xs={12} md={4}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} onClick={e => setOption(1)}> Request NFT </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} onClick={e => setOption(2)}> Claim Reward </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                <Button variant='contained' className="social-buttons" sx={{marginBottom:'80px'}} onClick={e => setOption(3)}> Profile </Button>
                </Grid>
            </Grid>
        </div>
        <div className="enterprise">
            {option == 1 ? <Section1 /> : option == 2 ? <Section2 /> : <Section3 />}
        </div>
            </div>
        </div>
    );
}