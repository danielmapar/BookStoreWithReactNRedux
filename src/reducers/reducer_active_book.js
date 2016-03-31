// State argument is not application state, only the state
// this reducer is responsible for

// state = null is some ES6 stuff so we dont return undefined
export default function(state = null, action) {

  // State is the actual previous state
  // If you select a book, next time you select a book
  // state will be carring that previous book

  // Action is the information you are passing from
  // the Container (action creator -> action)

  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // Redux dont allow us to return undefined
  // So we need to return something on startup
  return state;
}
