import styled from "@emotion/styled";
import { Avatar, Select } from "@mui/material";

export const AddClientSelect = styled(Select)({
  backgroundColor: "#F6F6F6",
  textTransform: "unset",
  color: "#000000",
  width: "10vw",

  "& .MuiSelect-select": {
    padding: "0 10px",
  },

  "& .MuiSvgIcon-root": {
    display: "none",
  },

  "& *": {
    borderWidth: "1px !important",
  },
});

export const AddClientListContainer = styled("div")({
  width: "inherit",
  justifyContent: "center",
  display: "flex",
  width: "inherit",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
});

export const ClientContainer = styled("div")({
  marginLeft: "10px",
  justifyContent: "center",
  display: "flex",
  width: "inherit",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
});

export const ClientAvatar = styled(Avatar)({
  width: "40px",
});

export const ClientName = styled("div")({
  fontWeight: 600,
  width: "7vw",
});

export const AddClientHelperText = styled("span")({
  marginRight: "3vw",
});
