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
