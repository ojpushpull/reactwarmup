import React from 'react';




 


const welcome = {
  greeting: 'Hey',
  title: 'React',
}

function getTitle(title) {
  return title;
}

const App = () => {
  console.log('App Renders')
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
    

    const [searchTerm, setSearchTerm] = React.useState('React');

    const handleSearch = (event) => {
    
      // value of target (here: input HTML element)
      setSearchTerm(event.target.value);
      };

      const searchedStories = stories.filter((story) => 
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
  return (
    <div>
    <h1> React im BACK</h1>
   
    {/* // B */}
    <Search search={searchTerm} onSearch={handleSearch} />
    
    
    <hr />
    <List list={searchedStories} />
    </div>
    );
  };
  

const Search = (props) => {
  console.log('search works?')
    



    return (
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={props.search} onChange={props.onSearch} />
    </div>
  );
};


const List = (props) => (
  console.log('list rendeers'),
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
