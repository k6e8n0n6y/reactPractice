import React from 'react';
import './Home.css';


// function Home() {
//     return (
//         <div className="Home">
//             <header className="Home-header">
//                 <p>
//                     testABCCCCC
//                 </p>
//             </header>
//         </div>
//     );

// }
function Home(props) {
    // return <h1>Hello, {props.name}, 1234444</h1>;
    return (<div className="Comment">
        <div className="UserInfo">
            {/* <img className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name2}
            /> */}
            <div className="UserInfo-name">
                123{props.author.nmae}
            </div>
        </div>
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
    </div>);
}

// function Avatar(props) {
//     return (
//         <img className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     );
// }
function formatDate(props) {
    return props + 'abcc';
}

export default Home;
