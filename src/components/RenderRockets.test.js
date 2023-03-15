import { fireEvent, render, screen } from '@testing-library/react';
import RenderRockets from './RenderRockets';

const handleUnrerved = jest.fn();

const rockets = [
  {
    id: 'wer23f',
    name: 'rocket1',
    reserved: true,
  },
];
describe('test click events', () => {
  test('when clicked, calls onClick with rockets', async () => {
    render(
      rockets.map((rocket) => (
        <RenderRockets
          key={rocket.id}
          rocket={rocket}
          handleUnrerved={handleUnrerved}
        />
      )),
    );

    fireEvent.click(screen.queryByText('Cancel Reservation'));

    expect(handleUnrerved).toHaveBeenCalledTimes(1);
    expect(handleUnrerved).toBeCalledWith(rockets[0].id);
  });
});
