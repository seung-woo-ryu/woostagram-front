import React from 'react';
import { GrandNavBar } from '../components/GNB';
import { AddForm } from '../components/add';

const AddArticlePage = () => {
    const HomePageMainDivStyle = {height:"90vh",display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }

    return (
        <>
            <GrandNavBar />
            <div style={HomePageMainDivStyle}>
                <AddForm/>
            </div>
        </>
    );
};

export default AddArticlePage;