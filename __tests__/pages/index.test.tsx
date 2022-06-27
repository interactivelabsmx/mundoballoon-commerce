import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import renderWithGraphql from '@lib/test/renderWithGraphql';
import Index from '@pages/index';

describe('Index', () => {
  it('should render index', async () => {
    await renderWithGraphql(<Index />);
    expect(screen.getByText('MundoBallon Commerce')).not.toBeNull();
  });
});
