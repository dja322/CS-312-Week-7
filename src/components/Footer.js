import React from "react";

//create footer with current year
function Footer() {
  //gets current year
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {year}</p>
    </footer>
  );
}

export default Footer;
