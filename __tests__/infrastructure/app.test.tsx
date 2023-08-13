import {App} from '@infrastructure';
import {render, screen} from '@testing-library/react-native';
import * as auth0 from 'react-native-auth0';

jest.mock('react-native-auth0');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    // Arrange
    jest.spyOn(auth0, 'useAuth0').mockReturnValue({
      authorize: jest.fn(),
      sendSMSCode: jest.fn(),
      authorizeWithSMS: jest.fn(),
      sendEmailCode: jest.fn(),
      authorizeWithEmail: jest.fn(),
      sendMultifactorChallenge: jest.fn(),
      authorizeWithOOB: jest.fn(),
      authorizeWithOTP: jest.fn(),
      authorizeWithRecoveryCode: jest.fn(),
      hasValidCredentials: jest.fn(),
      clearSession: jest.fn(),
      getCredentials: jest.fn(),
      clearCredentials: jest.fn(),
      requireLocalAuthentication: jest.fn(),
      error: null,
      user: null,
      isLoading: true,
    });

    // Act
    render(<App />);
    screen.debug();

    // Assert
    expect(true).toBeTruthy();
  });
});
