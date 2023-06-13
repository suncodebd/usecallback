import React from "react";

function Title({ title }) {
  console.log(`rendering heading Titel =  ${title}`);
  return <h1 className="text-4xl mb-10 ">{title}</h1>;
}

export default React.memo(Title);
