import rocketsSlice, { cancelRocket, reserveRocket } from "./rocketsSlice";

describe("Test suite for reserveRocket reducer", () => {
  const initialState = {
    rockets: [
      { id: "rocket1", name: "Falcon 1", reserved: false },
      { id: "rocket2", name: "Falcon 2", reserved: false },
    ],
  };

  it("should reserve a rocket", () => {
    const action = reserveRocket("rocket1");
    const newState = rocketsSlice(initialState, action);

    expect(newState.rockets[0].reserved).toEqual(true);
  });

  it("should unreserve a rocket", () => {
    const action = reserveRocket("rocket2");
    const newState = rocketsSlice(initialState, action);

    expect(newState.rockets[1].reserved).toEqual(true);

    const undoAction = cancelRocket("rocket2");
    const undoState = rocketsSlice(newState, undoAction);

    expect(undoState.rockets[1].reserved).toEqual(false);
  });
});
