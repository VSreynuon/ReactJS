import React, { useState } from "react";

function UserProfile() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSubmit = () => {
    alert("Submite have successfully");
  }
  return (
    <div>
      {isAuthenticated ? (
        <form>
            <h1>User Profile</h1>
            {/* <label>First Name</label><br/>
            <input type="firstname" name="firstname" placeholder="enter you first name"/><br/>
            <label>Last Name</label><br/>
            <input type="Lastname" name="Lastname" placeholder="enter you Last name"/>
            <button onClick={handleSubmit}>Submit</button> */}
        </form>
        
      ) : (
        <button onClick={() => setIsAuthenticated(true)}>Log in</button>
      )}
    </div>
  );
}
export default UserProfile;
