import { SelectInput, SelectInputProps } from 'react-admin';
import { Typography } from '@mui/material';

export default function LabeledSelectInput({
  label,
  ...props
}: SelectInputProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
          {label}
        </Typography>
      )}
      <SelectInput
        {...props}
        fullWidth
        label={false}
      />
    </div>
  );
}
