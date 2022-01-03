# Notes
The app is hosted both at [Vercel](http://everly-recipes.vercel.app/) and [Heroku](https://thawing-sea-27476.herokuapp.com). The Vercel site doesn't spin itself down after a period of inactivity, so it should load quite a bit more quickly than the Heroku site (since the Heroku site is most likely 'cold').

To facilitate performance, and to avoid making a bunch of requests to the free API, the first five recipes loaded (the 'Recipes of the Day') are cached in and subsequently read from localStorage until a day has passed, or the `dailyRecipesDate` item has been removed.

Other than that, it's mostly a normal create-react-app project that uses Hooks and function-based components, and Context for application state management.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
