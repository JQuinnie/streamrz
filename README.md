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
