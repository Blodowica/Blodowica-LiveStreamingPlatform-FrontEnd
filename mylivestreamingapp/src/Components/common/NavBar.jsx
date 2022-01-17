import React from 'react';

import './NavBar.css';
import { observer } from 'mobx-react-lite';

import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import { useStore } from '../../Stores/store';


// const NavBar = () => {
//     return ( 
      
// <nav className="navbar navbar-expand-lg navbar-light bg-light">

//      <NavLink className="nav-item nav-link active" to='../form'>forms</NavLink>
//      <NavLink to='../user-profile'>Profile Page</NavLink>
//      <NavLink to="../videoplayer">Video Player</NavLink>
//      <NavLink to="../homepage">Home page</NavLink>
  
//    </nav>
     
//      );
// }
 
// export default NavBar;






export default observer(function NavBar() {

    const { userStore: { user, logout } } = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/videoplayer' exact header>
                    <img src="../../Assets/logo.png" alt="logo" style={{ marginRight: 10 , }} />
                    RaveLive
                </Menu.Item>
                <Menu.Item as={NavLink} to='/videoplayer' name='Homepage' />
            
             
                <Menu.Item position='right'>
                    <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={user?.userName  }>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={'../user-profile'}
                                text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>

        </Menu>
    )

})


