import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../app/store';
import Missions from './Missions';

const mission = {
  mission_id: 'qrcae42',
};

describe('testing Missions', () => {
  it('test component renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions
            key={mission.mission_id}
            mission={mission}
          />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
