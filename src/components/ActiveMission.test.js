import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import ActiveMission from "./ActiveMission";

const activeMission = {
  mission_id: "wer23f",
  mission_name: "rocket1",
  reserved: true,
};

describe("testing all active missions", () => {

  it("Active missions renders correctly", () => {
   const tree = render(
        <ActiveMission
          key={activeMission.mission_id}
          activeMission={activeMission}
        />
    );
    expect(tree).toMatchSnapshot();
  });
  it("Expect to test if the text activeMission is inside the JoinedMissions component", () => {
    render(
      
        <ActiveMission
          key={activeMission.mission_id}
          activeMission={activeMission}
        />
    );

    expect(screen.getByText("rocket1")).toBeInTheDocument();
  });
});
