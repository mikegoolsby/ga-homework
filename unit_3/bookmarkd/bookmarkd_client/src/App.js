import React from 'react';
import './App.css';
import NewForm from "./components/newform"
import UpdateForm from "./components/updateform";
let baseURL = "http://localhost:3000";

const App = (props) => {

  const [state, setState] = React.useState({
    bookmarks: [],
    bookmark: null
  });

  const getBookmarks = () => {
    fetch(baseURL + "/bookmarkd")
      .then(
        data => data.json(),
        err => console.log("data", err)
      )
      .then(
        parsedData =>

          setState({ ...state, bookmarks: parsedData }),
        err => console.log("parsedData", err)
      );
  };


  React.useEffect(() => {
    getBookmarks()
  }, [])

  const handleAddBookmark = bookmarks => {
    const copyBookmark = [...state.bookmarks];
    copyBookmark.unshift(bookmarks);
    setState({
      bookmarks: copyBookmark,
      title: "",
      url:""
    });
};
const deleteBookmark = id => {
  fetch(baseURL + "/bookmarkd/" + id, {
    method: "DELETE"
  }).then(res => {
    const bookmarkArray = state.bookmarks.filter(bookmark => {
      return bookmark._id !== id;
    });
    setState({ ...state, bookmarks: bookmarkArray });
  });
};

const updateBookmark = bookmark => {
  setState({ ...state, bookmark });
};
  
  return (
    <div className='container'>
      <h1>BOOKMARKD</h1>
      <NewForm baseURL={baseURL} handleAddBookmark={handleAddBookmark} />
      <br></br>
      {state.bookmark && <UpdateForm updateBookmark={updateBookmark} baseURL={baseURL} bookmark={state.bookmark}></UpdateForm>}
      <table align="center">
        
        <tbody>
          {state.bookmarks.map(bookmark=>(
              <tr
              key={bookmark._id}
              >
                <td>{bookmark.title}</td>
                <td><a href={bookmark.url}>{bookmark.url}</a></td>
                <td onClick={() => updateBookmark(bookmark)}>[Update]</td>
                <td onClick={() => deleteBookmark(bookmark._id)}>[Delete]</td>
            </tr>
          
          ))}
        </tbody>
      </table>
    </div>
  );

}



export default App;