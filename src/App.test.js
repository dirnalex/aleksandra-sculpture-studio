import React from 'react';
import {render} from '@testing-library/react';
import InternationalizedApp from './InternationalizedApp';

test('renders learn react link', () => {
  const {getByText} = render(<InternationalizedApp/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
