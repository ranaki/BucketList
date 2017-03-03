// import React from 'react';
import React from 'react';
import Form from './Form';
import Career from './Career';
import Travel from './Travel';
import Food from './Food';
import Bucket from './Bucket';

class Buckets extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buckets: [] };
    }

    componentDidMount() {
        $.ajax({
            url: '/buckets',
            type: 'GET'
        }).done( buckets => {
            this.setState({ buckets })
        });
    }

    updateBucket = (bucket) => {
    let { _id, name } = bucket;
    $.ajax({
      url: `/buckets/${_id}`,
      type: 'PUT',
      data: { name }
    }).done( bucket => {
      let buckets = this.state.buckets.map( b => {
        if (b._id === _id)
          return bucket
        return b
      });

      this.setState({ buckets });
    });
    }

    deleteBucket = (id) => {
        $.ajax({
            url: `/buckets/${id}`,
            type: 'DELETE'
        }).done( () => {
            this.setState({ buckets: this.state.buckets.filter( b => b._id !== id ) });
        });
    }

    addBucket = (name) => {
        $.ajax({
            url: '/buckets',
            type: 'POST',
            data: {name}
        }).done(bucket => {
            this.setState({ buckets: [...this.state.buckets, bucket]})
        });
    }

    render () {
        console.log("count buckets:" + this.state.buckets.length);
        let buckets = this.state.buckets.map( bucket => {
            return(
                <Bucket
                    key={bucket._id}
                    updateBucket={this.updateBucket}
                    deleteBucket={this.deleteBucket}
                    {...bucket}
                />
            )
        });
        return(
            <div>
                <Form add={this.addBucket} placeholder="Add Bucket" />
                <div className="row">
                    {buckets}
                </div>
                <div className="divider">
                </div>
                {/*<Career />
                <Travel />
                <Food /> */}
            </div>
        )
    }
}

export default Buckets;