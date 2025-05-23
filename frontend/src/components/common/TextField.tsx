import { TextInput, TextInputProps } from 'react-admin';
import { Typography } from '@mui/material';

export default function LabeledTextInput({
  label,
  ...props
}: TextInputProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
          {label}
        </Typography>
      )}
      <TextInput
        {...props}
        fullWidth
        label={false}
      />
    </div>
  );
}
