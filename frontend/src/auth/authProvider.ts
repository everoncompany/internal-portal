import { msalAuthProvider } from 'ra-auth-msal';
import { msalInstance } from './msalInstance';

const baseAuthProvider = msalAuthProvider({ msalInstance });

export const authProvider = {
  ...baseAuthProvider,
  getIdentity: async () => {
    const account = msalInstance.getAllAccounts()[0];
    if (!account) return Promise.reject(new Error('No account found'));
    return Promise.resolve({
      id: account.localAccountId,
      fullName: account.name,
      email: account.username,
    });
  },
};
