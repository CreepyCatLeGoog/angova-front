import React from 'react';
import { render } from '@testing-library/react';

import MaxWidthWrapper from './index';

describe('MaxWidthWrapper component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <MaxWidthWrapper>
        <div>Hello, world!</div>
      </MaxWidthWrapper>
    );
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });

  it('applies default styles correctly', () => {
    const { container } = render(
      <MaxWidthWrapper>
        <div>Hello, world!</div>
      </MaxWidthWrapper>
    );
    expect(container.firstChild).toHaveClass('mx-auto');
    expect(container.firstChild).toHaveClass('max-w-screen-xl');
    expect(container.firstChild).toHaveClass('w-screen');
    expect(container.firstChild).toHaveClass('bg-gray-100');
    expect(container.firstChild).toHaveClass('sm:bg-gray-100');
  });

  it('renders with null children', () => {
    const { container } = render(<MaxWidthWrapper children={null} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('merges provided classNames with default classNames', () => {
    const { container } = render(<MaxWidthWrapper children className="custom-class" />);
    expect(container.firstChild).toHaveClass('mx-auto');
    expect(container.firstChild).toHaveClass('max-w-screen-xl');
    expect(container.firstChild).toHaveClass('w-screen');
    expect(container.firstChild).toHaveClass('bg-gray-100');
    expect(container.firstChild).toHaveClass('sm:bg-gray-100');
    expect(container.firstChild).toHaveClass('custom-class');
  });
})



