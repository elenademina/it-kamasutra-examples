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
    console.log("Star rendered")
    return (
        <>
            <div>star</div>
        </>
    );

}

function Rating() {
    console.log("Rating rendered")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}


function Accordion() {
    console.log("Accordion rendered")
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
