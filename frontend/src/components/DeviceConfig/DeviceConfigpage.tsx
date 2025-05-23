import DeviceConfigForm from './DeviceConfig';
import PageTemplate from '../common/PageTemplate';
import { Title } from 'react-admin';

export default function DeviceConfigPage() {
  return (
    <>
    <Title title="Device config" />
       <PageTemplate title="Radio token configuration tool">
          <DeviceConfigForm />
      </PageTemplate>
    </>
  );
}
