import React from "react";
require('../../scss/style.scss');
import UserList from '../containers/user-list.js';
import UserDetail from '../containers/user-details.js';

const App=function(){
    return(
    <div>
        <h2>User list:</h2>
        <UserList />
        <hr/>
        <h2>User Details:</h2>
        <UserDetail />
    </div>
    );
};

export default App;