import React, { useState } from 'react';


const initialStories = [
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

const useStorageState = (key, initalState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initalState
  );

     React.useEffect(() => {
        localStorage.setItem(key, value);
      }, [value, key]);

      return [value, setValue];
};

const App = () => {
  console.log('App Renders')
  
  
    

    const [searchTerm, setSearchTerm] = useStorageState(
      'search',
      'React'
      );

    const [stories, setStories] = React.useState(initialStories);

    const handleRemoveStory = (item) => {
      const newStories = stories.filter(
        (story) => item.objectID !== story.objectID
      );

      setStories(newStories);
    };
      



    const handleSearch = (event) => {
    
      // value of target (here: input HTML element)
      setSearchTerm(event.target.value);
      };

      const searchedStories = stories.filter((story) => 
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
  return (
    <div>
    <h1> {welcome}{getTitle}</h1>
   
    {/* // B */}
    <InputWithLabel
    id="search" 
    value={searchTerm}
    isFocused 
    onInputChange={handleSearch} 
    >
     <strong> Search: </strong> 
    </InputWithLabel>
    
    
    <hr />
    <List list={searchedStories} onRemoveItem={handleRemoveStory} />
   
    </div>
    );
  };
  

const InputWithLabel = ({ id, label, value, type = 'text', onInputChange, isFocused, children, }) => {
 //A
  const inputRef = React.useRef();

  //C 
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      //D
      inputRef.current.focus();
    }
  }, [isFocused]);
 return (
 <>
    <label htmlFor={id}> {children} </label>
    &nbsp;
    {/* B */}
    <input 
    ref={inputRef}
    id={id} 
    type={type}
    value={value}
    autoFocus={isFocused}
    onChange={onInputChange} 
    />,
    </>
);
};



const List = ({list, onRemoveItem }) => (
  console.log('list rendeers'),
  <ul>
      {list.map((item) => (
        <Item key={objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
);

        const Item = ({ item, onRemoveItem}) => (

          <li>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button type="button" onClick={() => onRemoveItem(item)}>
                Dismiss
              </button>
              </span>
            </li>
        
    );
  
    

export default App;
