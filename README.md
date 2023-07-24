# Next.js Project-Api

This is a simple Next.js project that demonstrates how to create a frontend application with dynamic routes and manage comments using an API route.

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.

## Running the Application

1. Install the required dependencies by running the following command:

   ```
   npm install
   ```

2. Start the development server:

   ```
   npm run dev
   ```

   This will launch the application in development mode. If it doesn't open automatically, you can visit `http://localhost:3000` in your web browser.

## Project Structure

The project structure is organized as follows:

```
- /pages
  - index.js
  - [commentID].js
- /data
  - comments.js
- /public
  - ...
- /styles
  - ...
- next.config.js
- package.json
- ...
```

- `pages/index.js`: The main page of the application containing the comment submission form and list of comments.
- `pages/[commentID].js`: A dynamic route page used to display individual comments based on their IDs.
- `data/comments.js`: A data module containing an array of comment objects for initial data and testing purposes.
- `public`: A directory to store static assets like images or other resources.
- `styles`: A directory for storing CSS stylesheets.

## API Routes

The project utilizes two API routes:

1. `/api/comments`: Handles fetching existing comments, adding new comments via POST requests, and deleting comments via DELETE requests.
2. `/api/comments/:commentID`: Handles GET and DELETE requests for fetching and deleting a specific comment by its ID.

Please make sure the API routes are correctly implemented and provided in the `pages/api` directory.

## How It Works

1. **Viewing Comments**: The main page (`/`) displays a list of existing comments. It fetches the comments from the backend API using the `/api/comments` route when the page loads.

2. **Adding Comments**: Users can submit new comments using the input field and "Submit Comments" button on the main page. The new comment is sent to the backend API using the `/api/comments` route with a POST request.

3. **Viewing Individual Comments**: Clicking on a comment will take users to a dynamically generated page at `/[commentID]`, where `commentID` is the ID of the selected comment. The page will display the details of the specific comment.

4. **Deleting Comments**: On the individual comment page (`/[commentID]`), users can delete the comment by clicking the "Delete" button. The comment will be removed from the backend using the `/api/comments/:commentID` route with a DELETE request.

## Technologies Used

- Next.js: A React framework for building server-rendered applications with routing and API support.
- React: A JavaScript library for building user interfaces.
- API Routes: Next.js API routes for handling backend functionality.
- CSS: Styling the components and layout.

## Contributions

Contributions to this project are welcome. If you find any bugs or have suggestions for improvements, feel free to create an issue or submit a pull request.

