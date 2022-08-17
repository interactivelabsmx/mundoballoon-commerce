import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { getNavOptions } from '@lib/test/fixtures/navOptions';
import { getHomePageProducts } from '@lib/test/fixtures/products';
import renderWithGraphql from '@lib/test/renderWithGraphql';
import Index from '@pages/index';

describe('Index', () => {
  it('should render index', async () => {
    await renderWithGraphql(<Index />, {
      Query: {
        navOptions: () => getNavOptions(),
        homepageProducts: () => getHomePageProducts(),
      },
    });
    expect(screen.getByText('Loading')).not.toBeNull();
    const title = await screen.findByText('Featured');
    expect(title).not.toBeNull();
  });
});
