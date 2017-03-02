import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Rick Test Buckets</a>
                    <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">New Nav Home</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile">
                        <li><a href="/">New Nav</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;