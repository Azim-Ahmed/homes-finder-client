import { useContext, useEffect, useRef, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Scrollspy from 'react-scrollspy';
import styles from '../../styles/header.module.scss';
import { UserContext } from '../../pages/_app';
import { useRouter } from 'next/router';

const Header = (props) => {
  const {
    appData,
    setAppData,
    loggedIn,
    setLoggedIn,
    admin,
    setAdmin,
  } = useContext(UserContext);
  const handleSignOut = () => {
    setAppData(null);
    const homeSection = '/login';
    if (!loggedIn || !admin) {
      router.push(homeSection);
    }
  };

  //Nav-bar Background-Color Change onScroll
  const [navBackground, setNavBackground] = useState('NavBarTransparent');
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 600;
      if (show) {
        setNavBackground('NavBarSolid');
      } else {
        setNavBackground('NavBarTransparent');
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container fluid>
      {props.dashboard ? (
        <Navbar fixed="top" className={`p-3`} bg="secondary" expand="lg">
          <Link href="/">
            <a className="navbar-brand">
              <Image
                src="/favicon.png"
                width={180}
                height={50}
                alt="logo image"
              />
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="text-center" id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
              <Link href="#about">
                <a className="nav-link">About Us</a>
              </Link>
              <Link href="#Services">
                <a className="nav-link">Our Services</a>
              </Link>
              <Link href="/">
                <a className="nav-link">Our Work</a>
              </Link>
              <Link href="/bookOnline">
                <a className="nav-link">Book Online</a>
              </Link>
              <Link href="#contact">
                <a className="nav-link">Contact Us</a>
              </Link>
              {admin ? (
                <>
                  {' '}
                  <Link href="/dashboard/home">
                    <a className="nav-link">Dashboard</a>
                  </Link>
                  <Link href="">
                    <a onClick={handleSignOut} className="nav-link">
                      Signout
                    </a>
                  </Link>
                </>
              ) : (
                <Link href="/login">
                  <a className="nav-link">SignIn</a>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar
          fixed="top"
          className={` ${styles[navRef.current]} ${props.navColor}  py-3`}
          expand="lg"
        >
          <Link href="/">
            <a className="navbar-brand">
              <Image
                src="/favicon.png"
                width={180}
                height={50}
                alt="logo image"
              />
            </a>
          </Link>
          <Scrollspy
            items={['home', 'about', 'Services', 'contact']}
            currentClassName="active"
          ></Scrollspy>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="text-center" id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/#home">
                <a className="nav-link">Home</a>
              </Link>
              <Link href="#about">
                <a className="nav-link">About Us</a>
              </Link>
              <Link href="#Services">
                <a className="nav-link">Our Services</a>
              </Link>
              <Link href="/">
                <a className="nav-link">Our Work</a>
              </Link>
              <Link href="/bookOnline">
                <a className="nav-link">Book Online</a>
              </Link>
              <Link href="#contact">
                <a className="nav-link">Contact Us</a>
              </Link>
              {appData?.email ? (
                <Link href="/dashboard/home">
                  <a className="nav-link">Dashboard</a>
                </Link>
              ) : (
                <Link href="/login">
                  <a className="nav-link">SignIn</a>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </Container>
  );
};

export default Header;
