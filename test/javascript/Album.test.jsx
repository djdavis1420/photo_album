import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Album from '../../app/assets/javascript/components/Album';
import _, { Store } from '../../app/assets/javascript/shared/Store'

describe(Album, () => {
  let photos;

  const renderComponent = () => {
    render(
      <Store initialState={{ albumId: '', photos: photos }}>
        <Album />
      </Store>
    );
  }

  beforeEach(() => renderComponent());

  describe('when photos is empty', () => {
    photos = [];

    it('renders nothing', () => {
      expect(screen.getByAltText('Foo')).toBeEmptyDOMElement();
      expect(screen.getByAltText('Bar')).toBeEmptyDOMElement();
    })
  })

  describe('when photos is not empty', () => {
    photos = [
      { id: 42, albumId: 42, title: 'Foo' },
      { id: 43, albumId: 43, title: 'Bar' },
    ];

    it('renders photos', () => {
      expect(screen.getByAltText('Foo')).toBeInTheDocument();
      expect(screen.getByAltText('Bar')).toBeInTheDocument();
    })
  })
});
