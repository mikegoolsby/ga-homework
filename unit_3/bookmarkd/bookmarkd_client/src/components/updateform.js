import React from "react"

const UpdateForm = (props) => {
  const [state, setState] = React.useState ({
      title: props.bookmark.title,
      url:props.bookmark.url,
      id:props.bookmark._id
  })
    const handleSubmit = event => {
        event.preventDefault()
        // Send data to the server
        fetch(props.baseURL + `/bookmarks/${state.id}`, {
            method: 'PUT',
            body: JSON.stringify({
            title: state.title,
            url: state.url
                
        }),
            
            headers: {'Content-Type': 'application/json'}
        })
        // server responses with JSON
        .then( res => res.json())
        .then(resJson => {
        props.updateBookmark(resJson)
        
        // clears the form
        setState({
            title:'',
            url: ''
        })
        }).catch (error => console.error({'Error': error}))
        window.location = "/"
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
        <input type="submit" value="Update It"  className="button" />
            <button className="button"> Forget It</button>
        </form>
    );
}

export default UpdateForm;