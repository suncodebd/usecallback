import React from "react";

function ShowCount({ count, title }) {
  console.log(`rendering ${title}..... ${count}`);
  return (
    <div>
      <span className="text-3xl"> {title} is </span>
      <span className="text-3xl text-orange-700"> {count} </span>
    </div>
  );
}

export default React.memo(ShowCount);
