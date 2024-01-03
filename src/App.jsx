import React from 'react';

const stories = [
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
    <h1> React im BACK</h1>
   
    
    <Search />
    
    
    <hr />
    <List list={stories} />
    </div>
    );
  };
  

const Search = () => {
    const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    
    // value of target (here: input HTML element)
    setSearchTerm(event.target.value);
  };

    return (
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};


const List = (props) => (
  <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
);

        const Item = (props) => (
          <li>
          <span>
            <a href={props.item.url}>{props.item.title}</a>
          </span>
            <span>{props.item.author}</span>
            <span>{props.item.num_comments}</span>
            <span>{props.item.points}</span>
            </li>
        
    );
    

export default App;
