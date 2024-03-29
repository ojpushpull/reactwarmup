import React, { useState } from 'react';
import axios from 'axios';

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

  const getAsyncStories = () => 
    new Promise((resolve, reject) =>
    setTimeout(reject, 2000));

  const storiesReducer = (state, action) => {
    switch (action.type) {
     case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return  {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
      case 'STORIES_FETCH_FAILURE':
        return  {
          ...state,
          isLoading: false,
          isError: true,

        };
        case 'REMOVE_STORY':
          return {
            ...state,
            data: state.data.filter(
            (story) => action.payload.objectID !== story.objectID
            ),
          };
    default:
      throw new Error();
    }
  };


 




const useStorageState = (key, initalState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initalState
  );

     React.useEffect(() => {
        localStorage.setItem(key, value);
      }, [value, key]);

      return [value, setValue];
};

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
const App = () => {
  console.log('App Renders')
  
  
    

    const [searchTerm, setSearchTerm] = useStorageState(
      'search',
      'React'
      );

      const [url, setUrl] = React.useState(
        `${API_ENDPOINT}${searchTerm}`
      );

    const [stories, dispatchStories] = React.useReducer(
      storiesReducer,
      { data: [], isLoading: false, isError: false }
      );

    const handleFetchStories = React.useCallback(async ()   =>  {
      //if 'searchterm' is not present
      //e.g. null, empty string undefined
      //do nothing
      //more generalized condition than searchTerm === ''


      dispatchStories({ type: 'STORIES_FETCH_INIT' });

      try {
      const result = await axios.get(url);

        dispatchStories({
          type: 'STORIES_FETCH_SUCCESS',
          payload: result.data.hits,
        });
     } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE'});
     }
    }, [url]);
    
     React.useEffect(() => {
      handleFetchStories();
     }, [handleFetchStories]);

    const handleRemoveStory = (item) => {
      dispatchStories({
        type: 'REMOVE_STORY',
        payload: item,
      });
        dispatchStories({
          type: 'SET_STORIES',
          payload: newStories,
        });
    };

    const ReactInate = () => (
      <span>
      <h1> React is back </h1>
      </span>
    );

    const SearchForm = ({
      searchTerm,
      onSearchInput,
      onSearchSubmit,
    }) => (
      <form onSubmit={onSearchSubmit}>
        <InputWithLabel
          id="search"
          value={searchTerm}
          isFocused
          onInputChange={onSearchInput}
          >
            <strong>Search: </strong>
          </InputWithLabel>

          <button type="submit" disabled={!searchTerm}>
            Submit
          </button>
      </form>
    );
      



    const handleSearchInput = (event) => {
    
      // value of target (here: input HTML element)
      setSearchTerm(event.target.value);
      };

    const handleSearchSubmit = (event) => {
      setUrl(`${API_ENDPOINT}${searchTerm}`);

      event.preventDefault();
    };
    

  
  return (
    <div>
    <h1>React is BACK</h1>
   
   
    {/* // B */}
   <SearchForm
   searchTerm={searchTerm}
   onSearchInput={handleSearchInput}
   onSearchSubmit={handleSearchSubmit}
   />
    <ReactInate /> 
    <hr />

    {stories.isError && <p>something wrung</p>}

    {stories.isLoading ? (
      <p>Loading ... </p>
    ) : (
    <List list={stories.data} onRemoveItem={handleRemoveStory} />
    )}
    </div>
    );
  };
  

const InputWithLabel = ({ id, value, type = 'text', onInputChange, isFocused, children, }) => {
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
    <label htmlFor={id}>{children}</label>
    &nbsp;
    {/* B */}
    <input 
    ref={inputRef}
    id={id} 
    type={type}
    value={value}
    onChange={onInputChange} 
    />,
    </>
);
};



const List = ({ list, onRemoveItem }) => (
  console.log('list rendeers'),
  <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
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
