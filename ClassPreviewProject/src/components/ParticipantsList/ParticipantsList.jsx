import { useState } from "react";
import { Participant } from "../Participant/Participant";
import { ParticipantListContainer } from "./ParticipantsList.style";

export const ParticipantList = ({ participants }) => {
  const [participantsList, setParticipantsList] = useState(participants);

  const deleteParticipant = (name) => {
    setParticipantsList((prevState) => {
      return prevState.filter((participant) => participant.name !== name);
    });
  };

  return (
    <ParticipantListContainer>
      {participantsList.map(({ avatar, name }) => (
        <Participant
          key={name}
          avatar={avatar}
          name={name}
          deleteParticipant={deleteParticipant}
        />
      ))}
    </ParticipantListContainer>
  );
};
