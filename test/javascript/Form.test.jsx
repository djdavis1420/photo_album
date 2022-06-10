import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../../app/assets/javascript/components/Form';
import _, { Store } from '../../app/assets/javascript/shared/Store'

describe(Form, () => {
  const renderComponent = async () => {
    await act(async () => {
      render(
        <Store initialState={{ albumId: '', photos: [] }}>
          <Form />
        </Store>
      );
    })
  }

  beforeEach(async () => await renderComponent());

  describe('when input is valid', () => {
    it('does not display error text', async () => {
      const input = screen.getByPlaceholderText('Album ID');

      await act(async () => {
        await fireEvent.change(input, { target: { value: '42' } });
      })

      expect(screen.queryByText('Input Invalid')).not.toBeInTheDocument();
    })
  })

  describe('when input is invalid', () => {
    it('displays error text', async () => {
      const input = screen.getByPlaceholderText('Album ID');

      await act(async () => {
        await fireEvent.change(input, { target: { value: 'foo' } });
      })

      expect(screen.queryByText('Input Invalid')).toBeInTheDocument();
    })
  })
})
