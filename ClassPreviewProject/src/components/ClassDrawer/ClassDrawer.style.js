import styled from "@emotion/styled";
import { Button, Drawer, Paper } from "@mui/material";

export const SideDrawer = styled(Drawer)({
  width: "20vw",
  height: "100vh",
});

export const SideDrawerContent = styled(Paper)({
  width: "20vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const ClassActions = styled("div")({
  width: "60%",
  height: "5vh",
  marginTop: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  padding: "0 1vw",
});

export const CancelClassSection = styled("div")({
  color: "#FF0B37",
  display: "flex",
  flexDirection: "row",
});

export const EditSection = styled("div")({
  color: "#000000",
  display: "flex",
  flexDirection: "row",
});

export const ClassHeader = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 0 4vh 1vw",
});

export const ClassImage = styled("img")({
  display: "flex",
  width: "6vw",
  paddingBottom: "0.5vh",
});

export const ClassTitle = styled("div")({
  display: "flex",
  width: "fit-content",
  fontSize: "1.2rem",
  fontWeight: 600,
  color: "#000000",
});

export const DetailsContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  padding: "4vh 1vw 2vh",
});

export const DetailSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2vh 1vw",
});

export const DetailSectionTitle = styled("span")({
  fontWeight: 600,
  paddingTop: "12px",
});

export const DetailSectionDesc = styled("span")({
  fontWeight: 200,
  fontSize: "0.8rem",
});

export const KnowladgeSection = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "left",
  padding: "4vh 1vw",
});

export const KnowladgeTitle = styled("div")({
  display: "flex",
  fontSize: "1.1rem",
  fontWeight: 600,
  paddingBottom: "1vh",
});

export const KnowladgeDesc = styled("div")({
  display: "flex",
  fontWeight: 200,
  fontSize: "0.9rem",
});

export const ParticipantsHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  padding: "4vh 1vw 2vh",
});
