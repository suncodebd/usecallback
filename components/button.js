import React from "react";

function Button({ handleClick, children }) {
  console.log(`rendering button ${children}`);
  return (
    <div>
      <button
        className="border-2 mb-4 mt-4 border-amber-400 p-2 rounded-md text-2xl font-bold duration-300 hover:bg-gray-300"
        type="button"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
