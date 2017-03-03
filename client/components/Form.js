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
          add(input.value, inputCat.value, radioSel.value)
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
          <input ref={r => radioSel = r } name="category" type="radio" id="food" value="food" />
            <label htmlFor="food">Food</label>
          <input ref={r => radioSel = r }  name="category" type="radio" id="career" value="career" />
            <label htmlFor="career">Career</label>
          <input ref={r => radioSel = r }  name="category" type="radio" id="travel" value="travel" />
            <label htmlFor="travel">Travel</label>
          <p>
            <input type='submit' className="btn" />
          </p>
        </form>
      </div>
    )
}

export default Form;

