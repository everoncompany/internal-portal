import { useState } from 'react';
import {
  Button,
  Create,
  SaveButton,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
} from 'react-admin';
import LabeledSelectInput from '../common/SelectInput';
import CustomButton from '../common/Button';
import { Card, Box, Typography, CardContent, Divider }from '@mui/material';
import { useForm, useFormContext } from 'react-hook-form';

const deviceTypes = [
  { id: '', name: '' },
];

const CancelButton = () => {
  const { reset } = useFormContext();

  return (
    <Button onClick={() => reset()}>Cancel</Button>
  );
};

const CustomToolbar = ({ disabled }: { disabled: boolean; }) => (
  <Box>
    <SaveButton disabled={disabled} />
    <CancelButton />
  </Box>
);

export default function DeviceConfigForm() {
  const notify = useNotify();
  const redirect = useRedirect();
  const form = useForm();

  const [deviceId, setDeviceId] = useState('');
  const [deviceType, setDeviceType] = useState('');

  const handleSubmit = async (data: any) => {
    try {
      console.log('Submitting:', data);
      notify('Device saved successfully', { type: 'success' });
      redirect('/devices');
    } catch (error) {
      notify('Error saving device', { type: 'error' });
    }
  };

  const handleClick = () => {}

  return (
    // <Create>
    <Box>
    <Card elevation={3}>
      <CardContent>
      <SimpleForm
        onSubmit={handleSubmit}
        //form={form}
        toolbar={
          <CustomToolbar disabled={!deviceId || !deviceType} />
        }
      >
        <Typography gutterBottom>
        Radio token configuration tool
      </Typography>

      <Divider sx={{ borderColor: '#ccc', my: 2 }}/>
        <p>Upload devices</p>
        <div style={{ marginBottom: '16px', display: 'flex', gap: '16px' }}>
        <CustomButton 
        label="Upload CSV"
        onClick={handleClick}
        color="primary"
        variant="contained"
      />
         <CustomButton 
        label="Scan QR code"
        onClick={handleClick}
        color="primary"
        variant="contained"
      />
      </div>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
      <TextInput source="Add device manually" fullWidth />
      <CustomButton 
        label="Verify"
        onClick={handleClick}
        color="primary"
        variant="contained"
      />
    </Box>
        <LabeledSelectInput
          source="deviceType"
          label="Select subclass"
          choices={deviceTypes}
          fullWidth
          onChange={(e: any) => setDeviceType(e.target.value)}
        />
      </SimpleForm>
      </CardContent>
      </Card>
      </Box>
    // </Create>
  );
}
