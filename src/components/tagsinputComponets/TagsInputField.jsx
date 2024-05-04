import {  useState } from "react";


const TagsInputField= ({ delimiter = "," }) => {
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");



const add=(e)=>{
    e.preventDefault()
    // console.log(currentTag)
    // console.log(tags)
};
  // Add tag
  const addNewTag = (e) => {

    e.preventDefault();

    if (currentTag.trim() === "") return;

    const tagsArray = currentTag
      .split(delimiter)
      .filter((tag) => tag.trim() !== "");
    // add new tag
    // console.log(tagsArray)
    setTags([...tags, ...tagsArray]);
    // reset input
    setCurrentTag("");
  };

  // remove tag
  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };


  const clearTags = () => {
    setTags([]);
  };

  const copyTags = () => {
    navigator.clipboard.writeText(tags.join(`${delimiter} `));
  };

  return (
    <div className="px-2 pt-2 border rounded border-gray-500 dark:bg-slate-800">
      <div className="flex items-center justify-between flex-wrap dark:text-gray-300">
        {/* <p className="px-2 capitalize">Add data</p>
        <div className="flex items-center justify-end flex-wrap gap-2">
                <ActionButton title="Copy" onClick={copyTags} />
          <ActionButton title="Clear" onClick={clearTags} />
        </div> */}
      </div>
   
      <ul className="mt-2 flex flex-wrap gap-1 items-center">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} removeTag={removeTag} />
        ))}
        {/* input form */}
        <li key="form" className="flex-1">
          <form onSubmit={addNewTag}>
            {/* input for current tag */}
            <input
              type="text"
              onChange={(e) => setCurrentTag(e.target.value)}
              value={currentTag}
              autoFocus={true}
              className=" w-full dark:text-white text-lg bg-transparent caret-fuchsia-400 focus:outline-0"
            />
          </form>
        </li>
      </ul>
      {/* <button onClick={add}>Add</button> */}
    </div>
   
  );
};

export default TagsInputField;





  
  const ActionButton= ({ title, onClick }) => {
    return (
      <button
        className="py-1 px-2 uppercase text-xs rounded 
        bg-gray-100 hover:bg-gray-200
        dark:bg-slate-600 dark:hover:bg-slate-500"
        onClick={onClick}
      >
        {title}
      </button>
    );
  };
  

  const Cross = () => {
    return (
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
      </svg>
    );
  };


  const Tag = ({ tag, removeTag }) => {
    return (
      <div
        className="p-2 flex items-center justify-center rounded-full 
      bg-gray-200 dark:bg-slate-700"
      >
        <p className="dark:text-gray-100">{tag}</p>
        <span
          onClick={() => removeTag(tag)}
          className="text-white rounded-full ml-2 flex justify-center items-center p-2 cursor-pointer bg-red-600 hover:bg-red-500"
        >
          <Cross />
        </span>
      </div>
    );
  }; 