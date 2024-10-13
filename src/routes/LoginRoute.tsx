import { Typography, Grid2 as Grid } from '@mui/material';
import Login from '../components/login/Login';

const LoginRoute = () => {
    return (
        <>
            <Typography variant='h2' component='h1'>
                Books Manager
            </Typography>
            <Grid container className='main-grid'>
                <Grid size={{ xs: 12, sm: 8, md: 6, lg: 4 }} offset={{ sm: 2, md: 3, lg: 4 }}>
                    <Login />
                </Grid>
            </Grid>
        </>
    );
};

export default LoginRoute;
