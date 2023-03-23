import { SideDrawer, SideDrawerContent } from "./Drawer.style";

export const Drawer = ({ open, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SideDrawer open={open} anchor="right" onClose={handleClose}>
      <SideDrawerContent></SideDrawerContent>
    </SideDrawer>
  );
};
