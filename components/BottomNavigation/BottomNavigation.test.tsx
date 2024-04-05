import React from 'react';
import { render } from '@testing-library/react';

import BottomNavigation from './index';

describe('BottomNavigation component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<BottomNavigation />);
    expect(getByText('Sessions')).toBeInTheDocument();
    expect(getByText('Profil')).toBeInTheDocument();
  })
});