import { Button } from 'react-admin';

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'inherit';
}

const CustomButton = ({
  label,
  onClick,
  disabled = false,
  variant = 'contained',
  color = 'primary',
}: CustomButtonProps) => {
  return (
    <Button
      label={label}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      color={color}
    />
  );
};

export default CustomButton;
