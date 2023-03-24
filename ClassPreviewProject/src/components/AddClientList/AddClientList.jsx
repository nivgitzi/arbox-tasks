import { useState } from "react";
import {
  AddClientHelperText,
  AddClientListContainer,
  AddClientSelect,
  ClientAvatar,
  ClientContainer,
  ClientName,
} from "./AddClientList.style";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";

export const AddClientList = ({ clients }) => {
  const [clientsList, setClientsList] = useState(clients);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <AddClientSelect
      displayEmpty
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      renderValue={() => {
        return isFocused ? (
          <AddClientHelperText>To</AddClientHelperText>
        ) : (
          <>
            <AddClientHelperText>Add client</AddClientHelperText>
            <PlusIcon />
          </>
        );
      }}
    >
      <AddClientListContainer>
        {clientsList.map(({ avatar, name }) => (
          <ClientContainer key={name}>
            <ClientAvatar src={avatar}></ClientAvatar>
            <ClientName>{name}</ClientName>
          </ClientContainer>
        ))}
      </AddClientListContainer>
    </AddClientSelect>
  );
};
