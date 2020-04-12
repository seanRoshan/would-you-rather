# Would You Rather Project

The "Would You Rather?" Project, is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.


## How to start

In the project directory, you can run:

### `yarn install`
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico   # React Icon, You may change if you wish.
│   ├── manifest.json # provides metadata used when your web app is installed on a user's mobile device
│   └── index.html    # DO NOT MODIFY
└── src
    ├── actions
    │   ├── authenticatedUser.action.js            # Actions to work with authernicatedUser store
    │   ├── questions.action.js                    # Actions to work with questions store
    │   ├── shared.action.js                       # Actions to handle all shared actions
    │   └── users.action.js                        # Actions to works with users store
    ├── assets
    │   └── logo.svg                       # React logo on the navbar
    ├── backend
    │   └──  game
    │        ├── data      
    │        │    ├── index.js        # index file for data storage
    │        │    ├── questions.js    # Questions database
    │        │    └── users.js        # Users database
    │        └── game.backend.js    # Backend mock server
    ├── components
    │   ├──  error
    │   │    └── error.component.js        # Error component to show error messsage
    │   ├──  footer
    │   │    └── footer.component.js       # Footer component to show page footer
    │   ├──  navbar
    │   │    ├── mobile.navbar.component.js       # Navbar component for mobie
    │   │    ├── navbar.component.js              # Navbar component to manage reponsive navbars
    │   │    └── wide.navbar.component.js         # Navbar component for wide screens
    │   ├──  question
    │   │    ├── answer      
    │   │    │    └── question.answer.component.js    # Component to recieve answer from user
    │   │    ├── info    
    │   │    │    └── question.info.component.js      # Component to show basic question info on home page
    │   │    ├── list       
    │   │    │    └── question.list.component.js      # Component to show list of questions on home page  
    │   │    └── result 
    │   │    │    └── question.result.component.js    # Component to show result page for each answered question     
    │   └──  user
    │        ├── scoreboard      
    │        │    └── user.scoreboard.component.js    # Component to show each scoreboard result for top 3 users
    │        ├── vote    
    │        └── user.vote.component.js          # Component to user vote in the result page
    ├── middlewares
    │   ├── index.js                        # Apply middlewares in order in this file
    │   └── logger.middleware.js            # Middleware to log states and actions
    ├── reducers
    │   ├── authenticatedUser.reducer.js            # Reducer to for authenticatedUser store
    │   ├── questions.reducer.js                    # Reducer to for questions store
    │   ├── shared.reducer.js                       # Combine reducers 
    │   └── users.reducer.js                        # Reducer to for users store
    ├── services
    │   ├── game.service.js                # Game service to make api calls 
    │   └── index.js # index of services 
    ├── styles                             # contain all styles 
    ├── views
    │   └──  dashboard
    │        ├── compose      
    │        │    └── compose.component.js            # View to add a new question
    │        ├── detail    
    │        │    └── detail.component.js             # View to show either result or get answer from user
    │        ├── home       
    │        │    └── home.component.js               # View to show answered and unanswered questions
    │        ├── leaderboard 
    │        │   └── leaderboard.component.js         # View to show leaderboard
    │        ├── login 
    │        │   └── login.component.js               # View to show login page
    │        ├── notfound
    │        │   └── notfound.component.js            # View to show 404 not found page
    │        └── dashboard.component.js               # Main views specific for would you rather project and handle routes
    │  
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `getUsers()`
* `getQuestions()`
* `saveQuestion(question)`
* `saveQuestionAnswer(object)`

1) `getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `AuthenticatedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| AuthenticatedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
