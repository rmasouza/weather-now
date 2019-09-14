import React from 'react';
import './PageHeader.scss';
import AppLogo from '../icons/AppLogo';

const PageHeader = () => {
    return (
        <header className='page-header'>
            <AppLogo/>
        </header>
    );
};

export default PageHeader;
