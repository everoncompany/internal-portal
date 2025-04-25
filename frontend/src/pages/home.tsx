import { Card, CardContent, Typography, Box } from '@mui/material';

export const Home = () => {
    return (
        <Box
           sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
           }}
        >
           <Card sx={{ maxWidth: 400, padding: 2, textAlign: 'center' }}>
            <CardContent>
                <Typography variant='h4' component='div' gutterBottom>
                    Internal Portal
                </Typography>
            </CardContent>
           </Card>
        </Box>
    )
}
