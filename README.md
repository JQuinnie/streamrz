# Streamrz

Stream it like Twitch. A streaming video app.

## App Highlights

- Navigation to separate pages
- User login and logout via Google OAuth
- Handle froms in Redux
- CRUD operations in React/Redux

### A Note About Navigation and Routers

- `<a>` tags will cause the dumping of state (React/Redux and JavaScript data) and html, thus reloading the page without all the previous information as well as refetching the entire html document. Do not use this method for navigation. Use the `<Link>` tag instead to preserve single page rendering.
