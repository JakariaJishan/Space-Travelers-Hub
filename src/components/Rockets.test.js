import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../app/store';
import Rockets from './Rockets';

const rockets = {
  id: 'qrcae42',
};

describe('testing Rocktes', () => {
  it('test component renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets
            key={rockets.id}
            rockets={rockets}
          />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
