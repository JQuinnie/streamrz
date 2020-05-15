# Streamrz

Stream it like Twitch. A streaming video app.

## App Highlights

- Navigation to separate pages
- User login and logout via Google OAuth
- Handle forms in Redux
- CRUD operations in React/Redux

### A Note About Navigation and Routers

- `<a>` tags will cause the dumping of state (React/Redux and JavaScript data) and html, thus reloading the page without all the previous information as well as refetching the entire html document. Do not use this method for navigation. Use the `<Link>` tag instead to preserve single page rendering.

### Redux Forms

Redux Form is a collection of reducer creators and action creators that make implmenting even the most complex and custom forms with React and Redux simple and performant. It includes a reducer, mapStateToProps, action creators with component props and handlers.

### Backend REST API

- [REST API](https://github.com/typicode/json-server)

In `server/db.json`, the file is server as a database.

## Advantage of Object-Based Reducers

### Array based approach

```javascript
const streamReducer = (state=[], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};
```

### Object based approach

Easier to manipulate objects when updating key/value pairs as well as more simple and straightforward code.

```javascript
const streamReducer = (state={}, action) => c
  switch (action.type) {
    case EDIT_STREAM:
      // const newState = { ...state }; // if no new object is returned, Redux assumes that nothing was updated from reducer
      // newState[action.payload.id] = action.payload;
      // return newState;

      return { ...state, [action.payload.id]: action.payload }; // key interpolation syntax
    default:
      return state;
  }
};
```

## Note on BrowserRouter and History

The BrowserRouter creates the history object which keeps track of the address in eh address bar of the browser. When the adderss changes the history object is going to communicate the change over to the browser router. The History object not only watches teh address bar but it also has the ability to change the address bar. Browser router makes the history object available as a prop passed down to the components in it, the component could easily trigger navigation inside of it.

It is not super easy to do programmatic navigation on an Action Creator. It is challenging to write code that can get a handle or a reference to the history object.

One solution could be to pass along the history object into the action creator (action creator to receive not only the formValues but also some history object). But this will require that the action creators are to be called with a history object and also make sure that all of the components call the action creator with the history object as well.

A better solution is for us to create a history object inside of a dedicated file, anytime we want to get access to that history object, we can just import that file. We are taking over maintaining control of the history object from the browser router. The BrowserRouter becomes a plain generic router and create the history object ourselves.
