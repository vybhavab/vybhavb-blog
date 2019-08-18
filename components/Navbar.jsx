import React from 'react';
import Link from 'next/link';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // active: false,
    };
  }

  // toggleMenu = () =>{
  //   this.setState(prevState => ({
  //     active: !prevState.active,
  //   }));
  // }

  // closeMenu = () =>{
  //   this.setState({
  //     active: false,
  //   });
  // }

  render() {
    // const active = this.state;
    return (
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item" role="navigation">
              <span className="is-size-4 is-size-5-mobile">vb.blog</span>
            </a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
