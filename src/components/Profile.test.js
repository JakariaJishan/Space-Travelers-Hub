import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ActiveMission from './ActiveMission';

const activeMissions = [
  {
    mission_id: 'wer23f',
    mission_name: 'rocket1',
    reserved: true,
  },
];

describe('testing all active missions', () => {
  it('Active missions renders correctly', () => {
    const tree = render(
      activeMissions.map((activeMission) => (
        <ActiveMission
          key={activeMission.mission_id}
          activeMission={activeMission}
        />
      )),
    );
    expect(tree).toMatchSnapshot();
  });
});
