import {ButtonAtom} from '@components';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {ReactTestInstance} from 'react-test-renderer';

describe('Button Atom', () => {
  it('should render correctly the word Test as button text', () => {
    // Arrange
    const expected = /test/i;

    // Act
    render(<ButtonAtom title="Test" />);
    const button = screen.queryByText(expected);

    // Assert
    expect(button).toBeOnTheScreen();
  });

  it('should not render correctly the word Test as button text', () => {
    // Arrange
    const expected = /other text/i;

    // Act
    render(<ButtonAtom title="Testing" />);
    const button = screen.queryByText(expected);

    // Assert
    expect(button).not.toBeOnTheScreen();
  });

  it('should press the button', () => {
    // Arrange
    const expected = /test/i;
    const onPress = jest.fn().mockImplementation(() => {
      console.log('Button pressed');
    });

    // Act
    render(<ButtonAtom title="Test" onPress={onPress} />);
    const button = screen.queryByText(expected);
    fireEvent.press(button as ReactTestInstance);

    // Assert
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
