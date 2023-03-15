import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ActiveRocket from './ActiveRockets';

const activeRocket = {
  id: 'wer23f',
  name: 'falcon 1',
  reserved: true,
};

describe('testing all active rockets', () => {
  it('Active rockets renders correctly', () => {
    const tree = render(
      <ActiveRocket
        key={activeRocket.mission_id}
        activeRocket={activeRocket}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Expect to test if the text activeRocket is inside the Joinedrockets component', () => {
    render(

      <ActiveRocket
        key={activeRocket.mission_id}
        activeRocket={activeRocket}
      />,
    );

    expect(screen.getByText('falcon 1')).toBeInTheDocument();
  });
});
