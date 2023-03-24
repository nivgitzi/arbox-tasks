import {
  SideDrawer,
  SideDrawerContent,
  ClassActions,
  EditSection,
  CancelClassSection,
  ClassImage,
  ClassHeader,
  ClassTitle,
  DetailsContainer,
  DetailSection,
  KnowladgeSection,
  KnowladgeTitle,
  KnowladgeDesc,
  ParticipantsHeader,
  AddClientBtnText,
  DetailSectionDesc,
  DetailSectionTitle,
} from "./ClassDrawer.style";
import { ReactComponent as CalenderIcon } from "../../icons/calender.svg";
import { ReactComponent as PencilIcon } from "../../icons/pencil.svg";
import { ReactComponent as FuelIcon } from "../../icons/fuel.svg";
import { ReactComponent as TimeIcon } from "../../icons/time.svg";
import { ReactComponent as CoachIcon } from "../../icons/coach.svg";
import ClassImg from "../../images/class.png";
import { Divider } from "@mui/material";
import { ParticipantList } from "../ParticipantsList/ParticipantsList";
import { participants } from "../../mocks/participants";
import { clients } from "../../mocks/clients";
import { useState } from "react";
import { AddClientList } from "../AddClientList/AddClientList";

export const ClassDrawer = ({ open, setIsOpen }) => {
  const [isClientsListOpen, setIsClientsListOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddClientClick = () => {
    setIsClientsListOpen(true);
  };

  return (
    <SideDrawer open={open} anchor="right" onClose={handleClose}>
      <SideDrawerContent>
        <ClassActions>
          <EditSection>
            <PencilIcon />
            &nbsp;<div>Edit</div>
          </EditSection>
          <CancelClassSection>
            <CalenderIcon />
            &nbsp;<div>Cancel Class</div>
          </CancelClassSection>
        </ClassActions>
        <ClassHeader>
          <ClassImage src={ClassImg} />
          <ClassTitle>Workout of the day</ClassTitle>
        </ClassHeader>
        <Divider />
        <DetailsContainer>
          <DetailSection>
            <CoachIcon />
            <DetailSectionTitle>Tom A</DetailSectionTitle>
            <DetailSectionDesc>Coach</DetailSectionDesc>
          </DetailSection>
          <DetailSection>
            <TimeIcon />
            <DetailSectionTitle>16:15</DetailSectionTitle>
            <DetailSectionDesc>Start Time</DetailSectionDesc>
          </DetailSection>
          <DetailSection>
            <FuelIcon />
            <DetailSectionTitle>3/15</DetailSectionTitle>
            <DetailSectionDesc>Participants</DetailSectionDesc>
          </DetailSection>
        </DetailsContainer>
        <Divider />
        <KnowladgeSection>
          <KnowladgeTitle>You Should Know...</KnowladgeTitle>
          <KnowladgeDesc>
            Dagan & Eden which participates in the class have a debt
          </KnowladgeDesc>
        </KnowladgeSection>
        <Divider />
        <ParticipantsHeader>
          <KnowladgeTitle>Participants</KnowladgeTitle>
          <AddClientList clients={clients} />
        </ParticipantsHeader>
        <ParticipantList participants={participants} />
      </SideDrawerContent>
    </SideDrawer>
  );
};
