# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# portfolio-site
# portfolio-site

Overview: portfolio-site is the culmination of the skills I've been practicing and projects I've been currently working on and who I am, This site consists of an about me, my projects, and contact page ,This site has been a long time coming and I am really proud of what I have created using the skills I have learned, this site is very roughly based on a tutorial site for react that I watched and dissected to create this

What went well:
-The sections turned out great with them all being united in color but contrasting in color as well giving a streamline flow through the site

-The Card for the profile is my favorite part of the site because it shows who I am in a well sized border with my profile pic with well placed text and colors that do not conflict

What issues I overcame:
-Ran into an issue in which when I clicked on the profile card it would open to a link instead of just being a card displaying a short about me, to solve this I added styling to remove text decoration and cursor styling to none, found card__items was turning it into a link removed that code and now it just acts as a stylized banner

-Ran into an issue in which the profile section had the skills going past the page when I added my bootcamp skills that I was taught, to solve this I went into the style for the background and increased the height to 130vh

-Ran into an issue in which my Card Item were overlapping so when I used card item for projects it used the card item for the profile, to solve this I created two different cardItem.js and changed the names accordingly for the Card Item so for projects Card Item it now is CardItem2

What I learned:
-Learned how to use props to show seperate links, texts and imgs for the project section
-Learned how to use margins and paddings to get the content to be in the right places
-Learned how to put multiple sections onto a single page

What I want to improve:
- I want to make it so there is less clutter of the files so that it is easier to edit the code
- I would like to add more style to it by adding animations to the site to make it pop out more
- I would like to add seperate pages with the readme info for each project when you click on each project and then having a link to the site at the bottom instead of linking straight to the project
