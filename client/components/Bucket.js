import React from 'react';

class Bucket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: false};
        this.input;
    }

    toggleEdit = () => {
      this.setState({ edit: !this.state.edit });
    }

    

    showEdit = () => {
      let {name, _id} = this.props;
      if (this.state.edit) {
        return (
        <form
            onSubmit={ e => {
            e.preventDefault()
            updateBoard({ _id, name: this.input.value })
            this.input.value = null;
            this.toggleEdit()
          }}
        >
          <input defaultValue={name} ref={ (n) => this.input = n } />
        </form>
        )
      } else {
        return(<span className="card-title">{name}</span>)
      }

    }

    render() {
        return(
            <div className="col s12 m3">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  {this.showEdit()}
                </div>
                  <h3>A Bucket</h3>
              </div>
            </div>
        )
    }
}

export default Bucket;