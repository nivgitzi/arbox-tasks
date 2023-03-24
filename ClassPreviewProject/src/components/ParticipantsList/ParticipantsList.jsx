import { Participant } from "../Participant/Participant";
import { ParticipantListContainer } from "./ParticipantsList.style";

export const ParticipantList = ({ participants, deleteParticipant }) => {
  return (
    <ParticipantListContainer>
      {participants.map((participant) => (
        <Participant
          key={participant.name}
          avatar={participant.avatar}
          name={participant.name}
          deleteParticipant={() => deleteParticipant(participant)}
        />
      ))}
    </ParticipantListContainer>
  );
};
