import React from "react";
const NewForm = (props) => {
  const [state, setState] = React.useState({
    title: "",
    url:''
  })
  const handleSubmit = event => {
      event.preventDefault()
      // Send the data to the server
      fetch(props.baseURL + '/bookmarkd', {
          method: 'POST',
          body: JSON.stringify({
            title: state.title,
          url: state.url}),
          headers: {'Content-Type': 'application/json'}
      })
      // server responses with json
      .then( res => res.json())
      .then(resJson => {
        // add the received data to state in App
        // aka...lifting state
        props.handleAddBookmark(resJson)
        
        // this clears the form
        setState({
          title:'',
          url: ''
        })
      }).catch (error => console.error({'Error': error}))
  }
  const handleChange = event => {
    setState({
      ...state,
      [event.target.id] :event.target.value
    })

  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={handleChange}
        value={state.title}
        placeholder="Website"
      />
      
        <input
        type="text"
        id="url"
        name="url"
        onChange={handleChange}
        value={state.url}
        placeholder="Website url"
      />
      <input type="submit" value="Add a new bookmark" />
    </form>
  );
}
export default NewForm;