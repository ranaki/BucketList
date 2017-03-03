import React from 'react';

const Form = ({ add, placeholder }) => {
    let input;
    return (
        <form onSubmit={ e => {
          e.preventDefault();
          add(input.value)
          input.value = null;

        }}>
          <input 
            placeholder="Add bucket name"
            ref={n => input = n }
          />
        </form>
    )
}

export default Form;