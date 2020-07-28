import { fireEvent, waitForDomChange } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import setup from '../setupTests';


describe('Test input requirements', () => {
  test('Expect page to after searching for a user', async () => {
    const { input, getByText } = setup();
    fireEvent.change(input, { target: { value: 'ilan274' } });
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    });
    await waitForDomChange();
    expect(getByText('ilan274')).toBeInTheDocument();
  });
});