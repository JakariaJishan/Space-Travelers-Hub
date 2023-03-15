import { fireEvent, render, screen } from "@testing-library/react";
import RenderMissions from "./RenderMissions";

const handleLeave = jest.fn();
const handleJoin = jest.fn();

const missions = [
  {
    mission_id: "wer23f",
    mission_name: "rocket1",
    reserved: true,
  },
];
describe("test click events", () => {
  test("when clicked, calls onClick with missions", async () => {
    const { queryByText } = render(
      missions.map((mission) => (
        <RenderMissions
          key={mission.mission_id}
          mission={mission}
          handleLeave={handleLeave}
        />
      ))
    );

    fireEvent.click(screen.queryByText("Leave Mission"));

    expect(handleLeave).toHaveBeenCalledTimes(1);
    expect(handleLeave).toBeCalledWith(missions[0].mission_id)

  });
});
