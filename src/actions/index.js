// actionCreator -- > action --> reducer (switch) --> update container

// An action creator is just a function that returns an action
// With that action in our hands, we will pass it to our reducers
// The reducers will get, or ignore the action. Whenever the reducers
// process the action, they will change their state, and also trigger a container
// update.
export function selectBook(book) {
  // Select book is an actionCreator, it needs to return an action,
  // and object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
