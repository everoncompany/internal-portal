import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from '@/auth/msalInstance';
import '../globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        await msalInstance.initialize();

        const response = await msalInstance.handleRedirectPromise();
        const accounts = msalInstance.getAllAccounts();

        if (!accounts.length) {
          await msalInstance.loginRedirect({
            scopes: ['User.Read'],
          });
        } else {
          msalInstance.setActiveAccount(accounts[0]);
        }
      } catch (e) {
        console.error('MSAL Redirect Error', e);
      } finally {
        setReady(true);
      }
    };

    init();
  }, []);

  if (!ready) return null;

  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}
