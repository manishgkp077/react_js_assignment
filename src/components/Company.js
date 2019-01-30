import React from 'react';
// This is stateless function named as Company
const Company = (props) => {
        return (
          <div>
          <h2>Create New Comoany</h2>
          <input type="text" value={
            props.currentCompany
          } onChange={props.updateCompany} />
          </div>
        );
}
export default Company;