const Header = () => {
  return (
    <div  className="header">
      <div className="logo-container">
       <img className="logo" src={HEADER_LOGO} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header; 