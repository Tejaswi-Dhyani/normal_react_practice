// var React=require('react');
// var ReactDOM=require('react-dom');

// now using advance/ecma javascript
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const fname="Tejaswi";
const lname="Dhyani";
const ffname="Ganga";
const llname="Dutt";
const unorder={
    listStyleType:"none",
textTransform:"capitalize",
textAlign:"right"
}
const img1="https://media.istockphoto.com/photos/crash-tesh-dummy-in-car-picture-id1209793467?b=1&k=20&m=1209793467&s=170667a&w=0&h=0aacX0EoFndZv-w-j5BQN9iV48o3mZzfgpbsjWQ4iLo=";
const img2="https://media.istockphoto.com/photos/crash-test-dummy-heads-picture-id170618218?b=1&k=20&m=170618218&s=170667a&w=0&h=tjw4bCrL3EI4g4uJykttWD7qPd4jEhCJEYCVMmX80rE=";
const img3="https://images.unsplash.com/photo-1520820446914-04cb9819a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHVtbXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
const links="https://www.google.co.in";
const imglink="https://images.unsplash.com/photo-1650992187066-85e14ffce0a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
ReactDOM.render(
//     [
// <h1>Hello friends!!</h1>,
// <p>lorem jhjhj kjhkjh kjhk</p>,
// <h2>Welcome to my page</h2>
//     ],

<>
<nav>
    <ul style={unorder}>
    <li>home</li>
        <li>about us</li>
        <li>contact</li>
        <li>faq</li>
    </ul>
</nav>
    <h1 className='head'>{fname} {lname} Netflix Shows</h1>
    <h3 style={{textTransform:"capitalize",fontSize:"25px"}}>List of 5 best series...</h3>
    <ol>
        <li>Dark <img src={img1} alt='dummy' width="100px" height="100px" ></img></li>
        <li>Extra Curricular <img src={img2} alt='dummy' width="100px" height="100px"></img></li>
        <li>My Holo Love <img src={img3} alt='dummy' width="100px" height="100px"></img></li>
        <li>my First-2 Love</li>
        <li>Mr. Robot</li>
    </ol>
    <a href={links} >Search</a>
    <a href={imglink} target="_blank" rel="noreferrer">
        <img src={imglink} alt='nature' width="100px" height="100px" ></img>
    </a>
    <p>The sum of 2+3= {2+3}</p>
    <p>My lucky number is {Math.floor(Math.random()*101)}</p>
    {/* now using template literals */}
    <h2>{`My name is ${fname} ${lname}.`}</h2>
    <h4>My father name is {ffname + " " + llname}.</h4>
</>,
document.getElementById("root")
);