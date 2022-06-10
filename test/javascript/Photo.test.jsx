import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Photo from '../../app/assets/javascript/components/Photo';

describe(Photo, () => {
  const renderComponent = () => {
    render(<Photo id={42} albumId={42} title={'Foo'} />);
  }

  beforeEach(() => renderComponent());

  it('displays title text', () => {
    expect(screen.queryByText('Foo')).toBeInTheDocument();
  })

  it('displays image with alt text of title', () => {
    expect(screen.queryByAltText('Foo')).toBeInTheDocument();
  })
});
