import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
/*import { Link } from 'react-router-dom';*/
import { HashLink as Link } from 'react-router-hash-link';
import './NavMenu.css';

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    public render() {
        return (
            <header>
                <Navbar style={{ background: '#E4DEAE', margin: '0!important' }} className="navbar-expand-sm navbar-toggleable-sm mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/#home">
                            <img src={require('../assets/home-svgrepo-com.svg')} width="30" height="30" alt=""></img>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} style={{ color: '#011B10' }} to="/#aboutMe">About Me</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} style={{ color: '#011B10' }} to="/#socialsAndResume">Connect</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} style={{ color: '#011B10' }} to="/Projects/VincentGaravuso">Full Portfolio</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
