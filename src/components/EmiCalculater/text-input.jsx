import React from "react";

function TextInput({ title, state, setState }) {
  return (
    <React.Fragment>
      <span className="title text-md font-semibold font-sans">{title}</span>
      <input
        type="number"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={title}
        className="border-2 py-2 px-4 bg-gray-100 focus:border-indigo-700 outline-none my-3 rounded-md"
      />
    </React.Fragment>
  );
}

export default TextInput;