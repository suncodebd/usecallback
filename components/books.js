import { useReducer, useState } from "react";
import { uid } from "uid/secure";
import ModalText from "./modalText";
import { reducer } from "./reducer";

const allBoks = [
  { id: uid(12), name: "Pather Panchal" },
  { id: uid(13), name: "Pather Panchal" },
  { id: uid(14), name: "Pather Panchal" },
];

function UseReducer() {
  const [bookState, dispatch] = useReducer(reducer, {
    books: allBoks,
    isModalOpen: false,
    modalText: "",
  });

  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: uid(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVED", payload: id });
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-2xl mb-5">Books list </h3>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 mb-5 p-5 flex flex-col gap-y-4 rounded"
      >
        <input
          className="p-2 rounded outline-none"
          name="bookname"
          placeholder="Book Name"
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button
          type="submit"
          className="border mt-2 p-3 font-bold border-blue-400 rounded duration-300 hover:bg-slate-600 hover:text-white"
        >
          Add
        </button>
      </form>
      <div>
        <h2 className="font-bold text-xl text-green-600 my-5">
          {bookState.isModalOpen && (
            <ModalText modalText={bookState.modalText} />
          )}
        </h2>
      </div>

      <ul>
        {bookState.books.map((book) => {
          const { id, name } = book;
          return (
            <li key={id}>
              - {name}{" "}
              <button
                type="button"
                className="border border-gray-500 rounded p-2"
                onClick={() => removeBook(id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseReducer;
