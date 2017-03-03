import React from 'react';

const Form = ({ add, placeholder, placeholderCat }) => {
    let input;
    let inputCat;
    console.log("inside Form");
    return (
        <form onSubmit={ e => {
          e.preventDefault();
          add(input.value)
          input.value = null;
          inputCat.value = null;

        }}>
          <input 
            placeholder={placeholder}
            ref={n => input = n }
          />
          <input 
            placeholder={placeholderCat}
            ref={n => inputCat = n }
          />
        </form>
    )
}

export default Form;