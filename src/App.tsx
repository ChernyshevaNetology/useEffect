import React, { useEffect, useState } from "react";
import "./App.css";
import { IUser, IUserDetails } from "./types";
import UserList from "components/UserList";
import UserCard from "components/UserCard";

const API =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";
const API_DETAILS = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/`;

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [details, setDetails] = useState<IUserDetails | null>(null);

  const getUsers = async (): Promise<void> => {
    fetch(API)
      .then((res) => res.json())
      .then((data: IUser[]) => setUsers(data));
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  const getUserInfo = async (id: number): Promise<void> => {
    fetch(`${API_DETAILS}${id}.json`)
      .then((res) => res.json())
      .then((data: IUserDetails) => setDetails(data));
  };

  const getActiveUser = (id: number): void => {
    setCurrentId(id);
  };

  useEffect(() => {
    if (currentId !== null) {
      getUserInfo(currentId);
    }
  }, [currentId]);

  return (
    <div className="container">
      <UserList
        users={users}
        getActiveUser={getActiveUser}
        currentId={currentId}
      />
      {details && <UserCard {...details} />}
    </div>
  );
};

export default App;
