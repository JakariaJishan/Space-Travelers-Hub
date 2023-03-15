import missionsSlice, { joinMissions, leaveMissions } from './missionsSlice';

describe('Test suite for reserveRocket reducer', () => {
  const initialState = {
    missions: [
      { mission_id: 'mission1', name: 'Mission 1', reserved: false },
      { mission_id: 'mission2', name: 'Mission 2', reserved: false },
    ],
  };

  it('should reserve a rocket', () => {
    const action = joinMissions('mission1');
    const newState = missionsSlice(initialState, action);

    expect(newState.missions[0].reserved).toEqual(true);
  });

  it('should unreserve a rocket', () => {
    const action = joinMissions('mission2');
    const newState = missionsSlice(initialState, action);

    expect(newState.missions[1].reserved).toEqual(true);

    const undoAction = leaveMissions('mission2');
    const undoState = missionsSlice(newState, undoAction);

    expect(undoState.missions[1].reserved).toEqual(false);
  });
});
