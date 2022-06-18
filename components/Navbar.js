import Image from "next/image";
import navbarStyles from "../styles/Navbar.module.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <section className={navbarStyles.navbar}>
      <div className={navbarStyles.logo} >
        <Image src="/logo.png" alt="logo" width="150" height="45"/>
      </div>
        
      <div className={navbarStyles.navItems}>
        <div className={navbarStyles.navItemsLeft}> 
          <div className={navbarStyles.link1}><a href="">About Hero Electric</a></div>
          <div className={navbarStyles.link2}><a href="">Products  <FontAwesomeIcon icon={faChevronDown} /></a>
          <div className={navbarStyles.dropdownProducts}>
                Dropdown Content
            </div>
          </div>
          
          <div className="link3"><a href="">Purchase Assistance  <FontAwesomeIcon icon={faChevronDown} /></a></div>
        </div>
      </div>

      <div className={navbarStyles.navItemsRight}>
       <a href="">Institutional Customers     <FontAwesomeIcon icon={faChevronDown} /></a>
       <h4>BOOK NOW</h4>
      </div>
    </section>
  )
}

export default Navbar;