import React from 'react';
import { Grid, Typography } from '@mui/material';
import Saly from './assets/Saly.png';

type props = {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

const AuthenticationContent: React.FC<props> = ({ text1, text2, text3, text4 }) => (
    <Grid container width={"70vw"}>
        <Grid item>
            <Grid container direction="column" spacing={5}>
                <Grid item>
                    <Typography variant='h3'>{text1}</Typography>
                    <Typography variant='h4'>Lorem Ipsum is Simply</Typography>
                </Grid>
                <Grid item>
                <Typography variant='h6'>{text2}</Typography>
                <Grid container spacing={1}>
                    <Grid item>
                        <Typography variant='h6'>{text3}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>{text4}</Typography>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <img src={Saly} />
        </Grid>
    </Grid>
);

export default AuthenticationContent;
