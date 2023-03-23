import {
  SideDrawer,
  SideDrawerContent,
  ClassActions,
  EditSection,
  CancelClassSection,
} from "./ClassDrawer.style";
import { ReactComponent as CalenderIcon } from "../../icons/calender.svg";
import { ReactComponent as PencilIcon } from "../../icons/pencil.svg";

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
      </SideDrawerContent>
    </SideDrawer>
  );
};
