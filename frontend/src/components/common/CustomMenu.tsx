import { Menu } from 'react-admin';
import SettingsIcon from '@mui/icons-material/Settings';

export const CustomMenu = () => (
  <Menu>
    <Menu.ResourceItem name="users" />
    <Menu.Item to="/device-config" primaryText="Device Config" leftIcon={<SettingsIcon />} />
  </Menu>
);
