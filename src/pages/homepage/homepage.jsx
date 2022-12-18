import React from 'react';
import './HomePage.scss';
import Directory from '../../components/directory/directory';
import MenuItem from '../../components/menu-item/menu-item';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default HomePage;