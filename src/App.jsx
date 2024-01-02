import React from 'react';

const list = [
{
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
},
{
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Daniel, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
},
];


 


const welcome = {
  greeting: 'Hey',
  title: 'React',
}

function getTitle(title) {
  return title;
}

function App() {
  
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
        return (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            </li>
        );
      })}
    </ul>
    </div>
    );
  }

export default App;
