import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem.js';
import { Wrapper } from './UserList.styles';
const UsersList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData, i) => (
          <UsersListItem index={i} key={userData.name} userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
