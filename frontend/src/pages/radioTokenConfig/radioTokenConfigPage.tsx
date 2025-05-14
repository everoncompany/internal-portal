import { Box, Card, CardContent, Typography, Button, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const RadioTokenConfig = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box sx={{ maxWidth: 500, width: '100%', padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Radio token configuration tool
        </Typography>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Radio token configuration tool
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Upload devices
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Button variant="contained" color="primary">
                Upload CSV
              </Button>
              <Button variant="contained" color="primary">
                Scan QR code
              </Button>
            </Box>

            <Typography variant="subtitle1" sx={{ mt: 3 }}>
              Add device manually
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <TextField fullWidth />
              <Button variant="contained" color="primary">
                Verify
              </Button>
            </Box>

            <FormControl fullWidth sx={{ mt: 3 }}>
              <InputLabel>Subclass</InputLabel>
              <Select defaultValue="">
                <MenuItem value="">Subclass</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button variant="contained" color="primary" disabled>
                Save
              </Button>
              <Button variant="outlined">Cancel</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default RadioTokenConfig;
