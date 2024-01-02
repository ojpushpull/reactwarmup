import React from 'react';

const list = [
"1",
"2",
"3",
"4",
"5",
];


 


const welcome = {
  greeting: 'Hey',
  title: 'React',
}

function getTitle(title) {
  return title;
}

function App(props) {
  
  return (
    <div>
    <h1>{list.map}</h1>
    <h1> Hello {getTitle('React')}</h1>
    <h1>
      {welcome.map} {welcome.title}
    </h1>
    

    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <ul>
      {list.map(function (item){
        return <li>{item}</li>;
      })}
    </ul>
    </div>
    );
  }

export default App;
