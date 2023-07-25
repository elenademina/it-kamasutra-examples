import React from 'react';
import './App.css';

function App() {
    // полезное что-то

    // обязана вернуть JSX
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    return <>This is App component.</>

}

function Star() {
    return (
        <>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </>
    );

}

function Rating() {
    //debugger
    return (
        <div>
            <Star/>
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
