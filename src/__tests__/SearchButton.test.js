import { fireEvent, waitForDomChange } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import setup from '../setupTests'

describe('Search button testing', () => {
  test('Verify if button is in the page and disabled', () => {
    const { searchButton } = setup();
    expect(searchButton).toBeVisible();
    expect(searchButton).toBeDisabled();
  });
  test('Should appear an error message', async () => {
    const { input, searchButton, getByText } = setup();
    fireEvent.change(input, { target: { value: '@kdsak@!KFA' } });
    fireEvent.click(searchButton);
    await waitForDomChange();
    expect(getByText('Not found')).toBeInTheDocument()
  });
});