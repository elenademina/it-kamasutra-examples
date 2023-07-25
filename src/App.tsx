import React from 'react';
import './App.css';

function App() {
    console.log("App rendering")
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
    console.log("AppTitle rendering")
    return <>This is App component.</>
}

function Star() {
    console.log("Star rendering")
    return (
        <>
            <div>star</div>
        </>
    );

}

function Rating() {
    console.log("Rating rendering")
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
    console.log("Accordion rendering")
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
