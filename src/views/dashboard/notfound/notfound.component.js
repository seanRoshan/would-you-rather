import React from 'react';
import ErrorComponent from "../../../components/error/error.component";

function NotfoundComponent() {
    return (
        <ErrorComponent message={"404: PAGE NOT FOUND!"}/>
    );
}

export default NotfoundComponent;
