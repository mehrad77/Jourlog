import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Header } from '../';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(<Header>Header</Header>);
  expect(asFragment()).toMatchSnapshot();
});
