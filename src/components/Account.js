import React from 'react';
// This is stateless function named as Account
const Account = (props) => {
    return (
        <div>
          <h2>Create New Account</h2>
          <input type="text" value={
            props.currentAccount
          } onChange={props.updateAccount} />
        </div>
      );
}        
export default Account;