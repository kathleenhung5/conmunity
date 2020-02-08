import React, {useState} from 'react';
import {IoMdPerson} from 'react-icons/io';

function Profile(){
    return(
        <div>
            <IoMdPerson />
        </div>
    )
}

Profile.defaultProps = {
    companyName: 'Company Name',
    username: 'Username'
}

export default Profile;

