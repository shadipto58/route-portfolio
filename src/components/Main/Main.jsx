import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Exprience from '../Exprience/Exprience';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Exprience></Exprience> */}

        </div>
    );
};

export default Main;