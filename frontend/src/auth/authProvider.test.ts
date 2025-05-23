import { authProvider } from "./authProvider";
import { msalInstance } from "./msalInstance";

jest.mock('./msalInstance', () => ({
  msalInstance: {
    getAllAccounts: jest.fn(() => [
      {
        localAccountId: '123',
        name: 'Test User',
        username: 'test@example.com',
      },
    ]),
  },
}));

describe('authProvider', () => {
  it('getIdentity returns user info', async () => {
    const result = await authProvider.getIdentity();
    expect(result).toEqual({
      id: '123',
      fullName: 'Test User',
      email: 'test@example.com',
    });
  });

  it('getIdentity fails if no account', async () => {
    (msalInstance.getAllAccounts as jest.Mock).mockReturnValueOnce([]);
    await expect(authProvider.getIdentity()).rejects.toThrow('No account found');
  });
});
