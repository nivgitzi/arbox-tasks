import { useState } from "react";
import {
  ParticipantAction,
  ParticipantActions,
  ParticipantAvatar,
  ParticipantContainer,
  ParticipantName,
  ParticipantStatusBtn,
} from "./Participant.style";

import { ReactComponent as TrashIcon } from "../../icons/trash.svg";
import { ReactComponent as WhatsappIcon } from "../../icons/whatsapp.svg";

export const Participant = ({ name, avatar, deleteParticipant }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleTrashClick = () => {
    deleteParticipant(name);
  };

  return (
    <ParticipantContainer>
      <ParticipantAvatar src={avatar}></ParticipantAvatar>
      <ParticipantName>{name}</ParticipantName>
      <ParticipantStatusBtn isChecked={isChecked} onClick={handleCheck}>
        {isChecked ? "Checked" : "Check in"}
      </ParticipantStatusBtn>
      <ParticipantActions>
        <ParticipantAction>
          <WhatsappIcon />
        </ParticipantAction>
        <ParticipantAction>
          <TrashIcon onClick={handleTrashClick} />
        </ParticipantAction>
      </ParticipantActions>
    </ParticipantContainer>
  );
};
