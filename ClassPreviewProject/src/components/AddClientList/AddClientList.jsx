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

export const AddClientList = ({ clients, handleClientClick }) => {
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
        {clients.map((client) => (
          <ClientContainer
            key={client.name}
            onClick={() => handleClientClick(client)}
          >
            <ClientAvatar src={client.avatar}></ClientAvatar>
            <ClientName>{client.name}</ClientName>
          </ClientContainer>
        ))}
      </AddClientListContainer>
    </AddClientSelect>
  );
};
