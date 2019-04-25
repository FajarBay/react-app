import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name : 'IpMerah',
        color : 'merah',
        img   : 'apel.jpg',
    },
    {
        name : 'IpKuning',
        color : 'kuning',
        img   : 'nanas.jpg',
    },
    {
        name : 'IpHijau',
        color : 'hijau',
        img   : 'alpukat.jpg',
    },
    {
        name : 'IpBiru',
        color : 'biru',
        img   : 'berry.jpg',
    },
    {
        name : 'Calculator',
        color : 'gray',
        img   : '',
    },
    {
        name : 'Profile',
        color : 'blue',
        img   : '',
    },
];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));

serviceWorker.register();