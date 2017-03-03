import React from 'react';

const Form = ({ add, placeholder, placeholderCat }) => {
    let input;
    let inputCat;
    let selval;

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

          {/*  
          <select ref={s => selval = s} >
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="career">Career</option>
          </select>
          */}

          <input type='submit' className="btn" />
        </form>
      </div>
    )
}

export default Form;

