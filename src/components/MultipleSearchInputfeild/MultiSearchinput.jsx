import React, { useEffect, useRef, useState } from 'react'
import Pill from './Pill';
import NoApiMultiselect from './NoApiMultiselect';
import MultiSelect from './MultiSelect';

const MultiSearchinput = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedUserSet, setSelectedUserSet] = useState(new Set());
    const [activeSuggestion, setActiveSuggestion] = useState(0);
  
    const inputRef = useRef(null);
  
    // https://dummyjson.com/users/search?q=Jo
  
    useEffect(() => {
      const fetchUsers = () => {
        setActiveSuggestion(0);
        if (searchTerm.trim() === "") {
          setSuggestions([]);
          return;
        }
  
        fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
          .then((res) => res.json())
          .then((data) => setSuggestions(data))
          .catch((err) => {
            console.error(err);
          });
      };
      // fetchUsers();
    const id = setTimeout(()=>{
      fetchUsers();
    },800)
    return ()=> clearTimeout(id)
    }, [searchTerm]);

    const handleSelectUser = (user) => {
        setSelectedUsers([...selectedUsers, user]);
        setSelectedUserSet(new Set([...selectedUserSet, user.email]));
        setSearchTerm("");
        setSuggestions([]);
        inputRef.current.focus();
      };

      const handleRemoveUser = (user) => {
        const updatedUsers = selectedUsers.filter(
          (selectedUser) => selectedUser.id !== user.id
        );
        setSelectedUsers(updatedUsers);
    
        const updatedEmails = new Set(selectedUserSet);
        updatedEmails.delete(user.email);
        setSelectedUserSet(updatedEmails);
      };
    

      const handleKeyDown = (e) => {
        if (
          e.key === "Backspace" &&
          e.target.value === "" &&
          selectedUsers.length > 0
        ) {
          const lastUser = selectedUsers[selectedUsers.length - 1];
          handleRemoveUser(lastUser);
          setSuggestions([]);
        } else if (e.key === "ArrowDown" && suggestions?.users?.length > 0) {
          e.preventDefault();
          setActiveSuggestion((prevIndex) =>
            prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
          );
        } else if (e.key === "ArrowUp" && suggestions?.users?.length > 0) {
          e.preventDefault();
          setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        } else if (
          e.key === "Enter" &&
          activeSuggestion >= 0 &&
          activeSuggestion < suggestions.users.length
        ) {
          handleSelectUser(suggestions.users[activeSuggestion]);
        }
      };


      const [optionSelected, setSelected] = useState(null);
      const handleChange = (selected) => {
        setSelected(selected);
      };
    

      const options = [
        { value: 0, label: "Goranboy" },
        { value: 1, label: "Safikurd" },
        { value: 2, label: "Baku" },
        { value: 3, label: "Ganja" },
        { value: 4, label: "Shusha" },
        { value: 5, label: "Agdam" },
      ];
   
  return (
    
 <>
 {/* {searchTerm} */}

    <div className='container mx-auto mt-10'>
<div className='relative p-3 fle'>

        {/* Pills */}
        <div className='flex gap-2  items-center w-full flex-wrap border rounded-full absolut'>
      {/* <div 
      className='flex gap-4 absolut items-center w-full'
      > */}
      {selectedUsers.map((user) => {
          return (
            <Pill
              key={user.email}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              onClick={() => handleRemoveUser(user)}
            />
          );
        })}
      {/* </div> */}

{/* <div className='w-full borde rounded-ful'> */}
<input 
 ref={inputRef}
type='text'
placeholder='Search....'
value={searchTerm}
onKeyDown={handleKeyDown}
onChange={(e)=>setSearchTerm(e.target.value)}
className='wfull py-4 px-6 borde border-gray-300 outline-none  m4 rounded-full placeholder:text-gray-600 focusoutline-blue-500 focus:border-none'/>
{/* // </div> */}

</div>

<div>
{(searchTerm) && (suggestions !== null)&&
    <div className="max-w-2xl mxauto">
        <div 
        className="p3 max-w-md bg-white rounded-lg border shadow-md sm:p6 dark:bg-gray-800 dark:border-gray-700 h-[400px]  overflow-y-auto "
        >
      
          {
            suggestions?.users?.map((user, index) =>{
                return !selectedUserSet.has(user.email) ? (
                    <>
                    <div className="flow-root cursor-pointer border-b-2 hover:bg-gray-100 px-3">
            <ul 
            role="list" 
            className="divide-y divide-gray-200 dark:divide-gray-700 ">
              <li className="py-3 sm:py-4"
                onClick={() => handleSelectUser(user)}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" 
                    // src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" 
                    // alt="Neil image"
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                     />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {user.firstName} {user.lastName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                
                </div>
              </li>
            
            </ul>
          </div>
                    </>
                  
                ):<></>
            })
          }

        </div>

      </div>  
    }
</div>



</div>
    </div>

    {/* <div className='mt-10'>
<NoApiMultiselect/>
    </div> */}


    {/* <div>
        <MultiSelect
        key="example_id"
        options={options}
        onChange={handleChange}
        value={optionSelected}
        isSelectAll={true}
        menuPlacement={"bottom"}

        />
    </div> */}



 </>
  )
}

export default MultiSearchinput