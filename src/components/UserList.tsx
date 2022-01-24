import React, { ReactElement } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { IUser } from "../types";

interface iUserListProps {
  users: IUser[];
  getActiveUser: (id: number) => void;
  currentId: number | null;
}

const UserList = React.memo(
  ({ users, getActiveUser, currentId }: iUserListProps) => {
    return (
      <List>
        {users.map<ReactElement>(({ name, id }: IUser) => (
          <ListItem
            style={{ cursor: "pointer" }}
            selected={id === currentId}
            onClick={() => getActiveUser(id)}
            key={id}
          >
            {name}
          </ListItem>
        ))}
      </List>
    );
  }
);

export default UserList;
