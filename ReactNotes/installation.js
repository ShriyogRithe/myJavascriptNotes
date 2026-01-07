// Bad way 
// npx creat-react-app <project-name> /// install all react dependencies


/////////////////////////////////////////////////////////////====================================================================================




// Controlled components: React state manages the form data. Every change in the input element triggers an event handler that updates the state, and the updated state is reflected back in the input's value. This approach offers more control and enables real-time validation.
// Code

//     import React, { useState } from 'react';
    
//     function ControlledInput() {
//       const [value, setValue] = useState('');
    
//       const handleChange = (event) => {
//         setValue(event.target.value);
//       };
    
//       return (
//         <input type="text" value={value} onChange={handleChange} />
//       );
//     }
// Uncontrolled components: The DOM handles the form data directly. To access the input value, you use refs. This approach requires less code and might be simpler for basic forms without complex validation or logic.
// Code

//     import React, { useRef } from 'react';
    
//     function UncontrolledInput() {
//       const inputRef = useRef(null);
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`Input value: ${inputRef.current.value}`);
//       };
    
//       return (
//         <form onSubmit={handleSubmit}>
//           <input type="text" ref={inputRef} />
//           <button type="submit">Submit</ ওকেbutton>
//         </form>
//       );
//     }



/////////////////////////////////////////////////////////////====================================================================================


