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
  AddClientBtn,
  AddClientBtnText,
} from "./ClassDrawer.style";
import { ReactComponent as CalenderIcon } from "../../icons/calender.svg";
import { ReactComponent as PencilIcon } from "../../icons/pencil.svg";
import { ReactComponent as FuelIcon } from "../../icons/fuel.svg";
import { ReactComponent as TimeIcon } from "../../icons/time.svg";
import { ReactComponent as CoachIcon } from "../../icons/coach.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import ClassImg from "../../images/class.png";
import { Divider } from "@mui/material";

export const ClassDrawer = ({ open, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
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
            <h5>Tom A</h5>
            <small>Coach</small>
          </DetailSection>
          <DetailSection>
            <TimeIcon />
            <h5>16:15</h5>
            <small>Start Time</small>
          </DetailSection>
          <DetailSection>
            <FuelIcon />
            <h5>3/15</h5>
            <small>Participants</small>
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
          <AddClientBtn>
            <AddClientBtnText>Add client</AddClientBtnText>
            <PlusIcon />
          </AddClientBtn>
        </ParticipantsHeader>
      </SideDrawerContent>
    </SideDrawer>
  );
};
