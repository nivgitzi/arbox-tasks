import styled from "@emotion/styled";
import { Avatar, Button } from "@mui/material";

export const ParticipantContainer = styled("div")({
  padding: "0 1vw 12px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
});

export const ParticipantAvatar = styled(Avatar)({
  width: "40px",
});

export const ParticipantName = styled("div")({
  fontWeight: 600,
  width: "5vw",
});

export const ParticipantStatusBtn = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isChecked",
})(({ isChecked }) => ({
  width: "5vw",
  backgroundColor: isChecked ? "#FFFFFF" : "#05C050",
  border: "1px #05C050 solid",
  color: isChecked ? "#05C050" : "#FFFFFF",
  textTransform: "none",

  "&:hover": {
    backgroundColor: isChecked ? "#FFFFFF" : "#05C050",
  },
}));

export const ParticipantActions = styled("div")({
  marginLeft: "1.5vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "15px",
});

export const ParticipantAction = styled("span")({
  cursor: "pointer",
});
