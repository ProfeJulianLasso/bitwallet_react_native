import {App} from '@infrastructure';
import {render, screen} from '@testing-library/react-native';

describe('App', () => {
  it('renders correctly', () => {
    // Arrange
    const messageExpected = 'Welcome to React Native';

    // Act
    render(<App />);
    const message = screen.getByText('Welcome to React Native');

    // Assert
    expect(message).toHaveTextContent(messageExpected);
  });
});
