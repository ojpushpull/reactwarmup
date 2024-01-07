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
    

    const [searchTerm, setSearchTerm] = React.useState(
      localStorage.getItem('search') || 'React'
      );

      React.useEffect(() => {
        localStorage.setItem('search', searchTerm);
      }, [searchTerm]);



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
  

const Search = ({ search, onSearch }) => (
  
  
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={search} onChange={onSearch} />
    </div>
  )



const List = ({list}) => (
  console.log('list rendeers'),
  <ul>
      {list.map(({ objectID, ...item }) => (
        <Item key={objectID} {...item} />
      ))}
    </ul>
);

        const Item = ({ title, url, author, num_comments, points }) => (
          <li>
          <span>
            <a href={url}>{title}</a>
          </span>
            <span>{author}</span>
            <span>{num_comments}</span>
            <span>{points}</span>
            </li>
        
    );
    

export default App;
