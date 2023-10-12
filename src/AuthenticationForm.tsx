import { Button, Grid, TextField, Typography } from "@mui/material"
import Apple from './assets/apple.png'
import Facebook from './assets/Facebook.png'
import Google from './assets/google.png'
import { ReactElement } from "react"

type props = {
    text: string;
    labels: Array<string>
}

const AuthenticationForm: React.FC<props> = ({ text, labels }) => {

    const textFields : Array<ReactElement<any, any>> = [];
    for (let i = 0; i < labels.length; i++) {
        textFields.push(
            <Grid item >
                <TextField label={labels[i]} variant="outlined" fullWidth />
            </Grid>
        );
    }

    return (
        <>
            <Grid container spacing={2} direction="column" sx={{ width: "25vw" }}>
                <Grid item >
                    <Typography variant="h4">{text}</Typography>
                </Grid>
                {textFields}
                <Grid item >
                    <Button variant="contained" sx={{ paddingTop: "1.5vh", paddingBottom: "1.5vh" }} fullWidth>Register</Button>
                </Grid>
                <Grid item sx={{ marginTop: "2vh" }}>
                    <Typography variant="subtitle1" sx={{ display: "flex", justifyContent: "center", color: "grey" }}>or continue with</Typography>
                </Grid>
                <Grid container spacing={2} justifyContent={"center"} sx={{ marginTop: "3vh" }}>
                    <Grid item>
                        <img src={Facebook} />
                    </Grid>
                    <Grid item>
                        <img src={Apple} />
                    </Grid>
                    <Grid item>
                        <img src={Google} />
                    </Grid>
                </Grid>
            </Grid>
        </>)
}

export default AuthenticationForm