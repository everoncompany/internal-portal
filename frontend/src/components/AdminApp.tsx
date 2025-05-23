import { Admin, Resource, ListGuesser, CustomRoutes, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { AuthProvider } from 'react-admin';
import { Route } from 'react-router-dom';
import DeviceConfigPage from './DeviceConfig/DeviceConfigpage';
import CustomLayout from './common/CustomLayout';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminApp = ({ authProvider }: { authProvider: AuthProvider }) => {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} layout={CustomLayout}>
      <Resource name="users" list={ListGuesser} edit={EditGuesser} recordRepresentation="name" />
      <CustomRoutes>  
        <Route path="/device-config" element={<DeviceConfigPage />} />
      </CustomRoutes>
    </Admin>
  );
};

export default AdminApp;
