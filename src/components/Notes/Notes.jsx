import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { getUserCombinedData } from '../../store/notes/thunks';
import { useDispatch } from 'react-redux';

const Notes = () => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState()
  const getUserData = () => {
    dispatch(getUserCombinedData(1)).then(data => setUserData(data))
  }

  return (
    <div>
      <Button
          type="button"
          variant="primary"
          onClick={getUserData}
        >load user data</Button>
        <pre>
          {JSON.stringify(userData, null, 2)}
        </pre>
    </div>
  );
};

export default Notes;
