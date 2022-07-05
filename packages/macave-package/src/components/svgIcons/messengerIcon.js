import React, {useState, useEffect} from 'react';
import {connect, styled,css}  from 'frontity';

const MessengerIcon = (props) => { 
    return (
        <svg fill="#000000" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path d="m25 2c-12.699 0-23 9.6016-23 21.5 0 6.3008 2.8984 12.199 8 16.301v8.8008l8.6016-4.5c2.0977 0.59766 4.1992 0.79688 6.3984 0.79688 12.699 0 23-9.5977 23-21.5 0-11.797-10.301-21.398-23-21.398zm2.3008 28.602-5.8008-6.2031-10.801 6.1016 12-12.699 5.9023 5.8984 10.5-5.8984z"/>
        </svg>
    )
}

export default connect(MessengerIcon)