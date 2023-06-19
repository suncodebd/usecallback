export const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allBoksData = [...state.books, action.payload];
    return {
      ...state,
      books: allBoksData,
      isModalOpen: true,
      modalText: "book is added",
    };
  }
  if (action.type === "REMOVED") {
    const filterBooks = [...state.books].filter(
      (book) => book.id !== action.payload
    );
    return {
      ...state,
      books: filterBooks,
      isModalOpen: true,
      modalText: "Books is Removed",
    };
  }
  return state;
};
