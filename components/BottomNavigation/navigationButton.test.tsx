import React from 'react';
import { render } from '@testing-library/react';
import NavigationButton from './navigationButton';
import { NavigationMenu } from '../ui/navigation-menu';

describe('NavigationButton component', () => {
  it('renders navigation for session', () => {
    const { getByTestId, queryByTestId, queryByText } = render(
      <NavigationMenu>
        <NavigationButton isSession={true} pathName='session' value="ok" />
      </NavigationMenu>
    );

    const isSession = getByTestId('sessions');
    expect(isSession).toBeInTheDocument();

    const isNotSession = queryByTestId("questions")
    expect(isNotSession).not.toBeInTheDocument();
  });

  it('renders navigation for questions', () => {
    const { getByTestId, queryByTestId } = render(
      <NavigationMenu>
        <NavigationButton isSession={false} pathName='questions' value="ok" />
      </NavigationMenu>
    );

    const isSession = queryByTestId('sessions');
    expect(isSession).not.toBeInTheDocument();

    const isNotSession = getByTestId("questions")
    expect(isNotSession).toBeInTheDocument();
  });
});
