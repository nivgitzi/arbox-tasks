import {
  SideDrawer,
  SideDrawerContent,
  ClassActions,
  EditSection,
  CancelClassSection,
  ClassImage,
  ClassHeader,
  ClassTitle,
} from "./ClassDrawer.style";
import { ReactComponent as CalenderIcon } from "../../icons/calender.svg";
import { ReactComponent as PencilIcon } from "../../icons/pencil.svg";
import { ReactComponent as ClassIcon } from "../../icons/class.svg";
import ClassImg from "../../images/class.png";

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
      </SideDrawerContent>
    </SideDrawer>
  );
};
