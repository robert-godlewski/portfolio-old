// JS Libraries
import React from 'react';

// JS Components
import NavBar from './NavBar';
import Summary from './Summary';
import AllProjects from './AllProjects';
import FooterBar from './FooterBar';


const HomeView = (props) => {
    const {projectList, setProjectList} = props;

    return (
        <>
            <NavBar/>
            <Summary/>
            <AllProjects projectList={projectList} setProjectList={setProjectList}/>
            <FooterBar/>
        </>
    );
};


export default HomeView;
