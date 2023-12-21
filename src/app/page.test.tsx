import { render, screen } from '@testing-library/react';
import Home from './page';
import { useRouter } from 'next/navigation';
import userEvent from '@testing-library/user-event';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
(useRouter as jest.Mock).mockReturnValue({
  push: jest.fn(),
});

describe('Home page get started button', () => {
  it('should have a get started button', () => {
    render(<Home />);

    const getStartedButton = screen.getByRole('button', {
      name: 'Get started',
    });

    expect(getStartedButton).toBeInTheDocument();
  });

  it('should redirect to /get-started', async () => {
    const { push } = useRouter();
    render(<Home />);

    const getStartedButton = screen.getByRole('button', {
      name: 'Get started',
    });

    await userEvent.click(getStartedButton);

    expect(push).toBeCalledWith('/get-started');
  });
});

describe('Home page learn more link', () => {
  it('should have a learn more link', () => {
    render(<Home />);

    const learnMoreButton = screen.getByRole('link', {
      name: 'Learn more',
    });

    expect(learnMoreButton).toBeInTheDocument();
  });

  it('should have a link to the SpaceTraders website', () => {
    render(<Home />);

    const learnMoreButton = screen.getByRole('link', {
      name: 'Learn more',
    });

    expect(learnMoreButton).toHaveAttribute('href', 'https://spacetraders.io');
  });
});
