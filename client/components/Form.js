import React from 'react';

const Form = ({ add, placeholder, placeholderCat }) => {
    let input;
    let inputCat;
    // let selval;
    let radioSel;

    console.log("inside Form");
    return (
      <div>
        <form onSubmit={ e => {
          e.preventDefault();
          add(input.value, inputCat.value)
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
          <p>
            <input type='submit' className="btn" />
          </p>
        </form>
      </div>
    )
}

export default Form;

