import React from 'react';
import './App.css';

function App() {
    // полезное что-то

    // обязана вернуть JSX
    return (
        <div>
            This is App component.
            <Rating />
            <Accordion />
        </div>
    );
}

function Star() {
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    );

}

function Rating() {
    debugger
    return (
        <div>
            <Star />
        </div>
    );
}


function Accordion() {
    return <div>
        <h3>Меню</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

}


export default App;
