import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ userData: { avarage, name, attendance = '0%' } }) => (
  <Wrapper>
    <div>{avarage}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    avarage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
