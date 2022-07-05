import React, {useState, useEffect} from 'react';
import {connect, styled,css}  from 'frontity';

const FbIcon = (props) => { 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="8.147" height="17.381" viewBox="0 0 8.147 17.381">
            <path id="Trazado_684" data-name="Trazado 684" d="M17.681,15.175h-2.57v8.686H11.583V15.177H9.862v-3.5h1.71c0-.312-.018-.583,0-.852a11.693,11.693,0,0,1,.2-2,2.835,2.835,0,0,1,2.553-2.282,35.736,35.736,0,0,1,3.616-.026V9.446c-.59,0-1.171,0-1.753,0-.707,0-.952.244-.959.947,0,.353,0,.7,0,1.056,0,.044.01.088.022.19h2.758c-.112,1.207-.218,2.349-.327,3.536" transform="translate(-9.862 -6.48)"/>
        </svg>
    )
}

export default connect(FbIcon)