This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Table of contents

- [How to run](#How-to-run-)
- [Available Scripts](#Available-Scripts-)
- [Frontend](#Frontend-)
- [Known bugs](#Known-bugs-)
- [Next steps](#Next-steps-)

## How to run

- Open your command line interface in the folder you wish to create this project
- Type: $ git clone https://github.com/RCorpy/Rello.git
- Go inside the Rello folder, $ cd Rello
- Install dependencies, you might need sudo privileges: $ sudo npm i
- Ready to launch! $ npm start


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Frontend

Since there is no backend yet, the initial state is hard coded, it uses an array found in services/redux/store.js, each position in the array is an object containing all the data from a column:

#### `Column Structure`
- title: the title for the column
- cards: an array in which each position has an object, with all the information about the card

#### `Card Structure`
- header: the title of the card, this will show in the main view
- body: the full description of the card, this will only show when you click on it, can be changed in the future to contain more than just a plain text

### `State management`

To manage the state we are using Redux, the reducer is simple and self explanatory, the available functions at the moment are:

When modifying a card:
- DELETE_CARD
- MODIFY_CARD

On the left side menu:
- DELETE_COLUMN
- CREATE_COLUMN

On the bottom of the column:
- CREATE_CARD

For drag and drops, helping changing the position of a card between columns or inside the column itself:
- MOVE_CARD

#### `How does the drag and drop work`

The internal state of each column will change when you hover with a card over it, recording the position of the array of cards of the column you are hovering over, column title and create new card button will also change this state and then when you drop it inside any part of a column the MOVE_CARD method from the reducer will be called and the card will be placed in that place acording to the state of the column

## Known bugs

There is a possibility of selecting multiple cards at the same time, after moving all of them at one into a valid drop zone the program will collapse

## Next steps

- SideBar still lacks functionality in Change Background and Search Card Buttons
- CSS can be improved
- Should be able to change the positions of full columns
- Backend with database to save the progress, maybe even add users
- Tags could be added to categorize the cards