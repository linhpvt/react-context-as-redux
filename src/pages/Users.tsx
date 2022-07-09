import React, { useCallback } from 'react';
import { useStore } from '../store/useStore';
import { userInsertAction, userUpdateAction, userDeleteAction } from '../features/users/actions';

const mapUserToProps = ((state: any) => {
  const {users} = state
  return { users }
})

const Users = () => {
  const [{ users}, dispatch] = useStore(mapUserToProps, null)
  const userInsertHandler = useCallback(() => {
    console.log('userinsert', Date.now())
    dispatch(userInsertAction())
  }, [userInsertAction])
  console.log(users)
  return (
    <>
      <div>
        <button onClick={userInsertHandler}>Insert</button>
        <button onClick={() => dispatch(userUpdateAction())}>Update</button>
        <button onClick={() => dispatch(userDeleteAction())}>Delete</button>
      </div>
      <div>
        { users.length }
      </div>
    </>
  )
}
export default React.memo(Users)