import { participants } from "../../mocks/participants";
import { Participant } from "../Participant/Participant";
import { ParticipantListContainer } from "./ParticipantsList.style";

export const ParticipantList = () => {
  return (
    <ParticipantListContainer>
      {participants.map(({ avatar, name }) => (
        <Participant avatar={avatar} name={name} />
      ))}
    </ParticipantListContainer>
  );
};
