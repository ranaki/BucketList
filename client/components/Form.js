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
            <input name="category" type="radio" id="food" selected/>
              <label htmlFor="food">Food</label>
            <input name="category" type="radio" id="career" />
              <label htmlFor="career">Career</label>
            <input className="with-gap" name="category" type="radio" id="travel"  />
              <label htmlFor="travel">Travel</label>

          {/*  
          <select ref={s => selval = s} >
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="career">Career</option>
          </select>
          */}
          <p>
            <input type='submit' className="btn" />
          </p>
        </form>
      </div>
    )
}

export default Form;

