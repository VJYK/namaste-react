const HeaderComponent = () => (
    <div className="header">
      <img
        className="logo"
        src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"
        alt="logo"
        width={100}
        height={100}
      />
      <div className="navbar-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );

export  default HeaderComponent;