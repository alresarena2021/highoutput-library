import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RadioImage from './RadioImage';

describe('Radio Image', () => {
  beforeEach(() => {
    render(
      <RadioImage
        value={'Kat'}
        image={'https://randomuser.me/api/portraits/women/44.jpg'}
      />
    );
  });

  it('should renders radio image box', async () => {
    const radioImageBox = await screen.findAllByTestId('radio.image.box');
    expect(radioImageBox).toHaveLength(1);
  });

  it('should renders radio image container', async () => {
    const radioImageContainer = await screen.findAllByTestId(
      'radio.image.container'
    );
    expect(radioImageContainer).toHaveLength(1);
  });

  it('should contain image src url pass from props', async () => {
    const radioImageContainer = screen.getByTestId('radio.image.container');

    expect(radioImageContainer.getAttribute('src')).toBe(
      'https://randomuser.me/api/portraits/women/44.jpg'
    );
  });

  it('should render radio input value holder', async () => {
    const radioImageInput = await screen.findAllByTestId('radio.image.input');

    expect(radioImageInput).toHaveLength(1);
  });

  it('should contain the value pass from props', async () => {
    const radioImageInput = screen.getByTestId('radio.image.input');
    expect(radioImageInput.getAttribute('value')).toBe('Kat');
  });

  it('should render radio input value holder as hidden', async () => {
    const radioImageInput = screen.getByTestId('radio.image.input');
    expect(radioImageInput).not.toBeVisible();
  });
});
