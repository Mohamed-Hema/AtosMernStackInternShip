import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
    <footer>
      <p>Copyright ⓒ {year}, Made with ❣️ <a href="https://github.com/Mohamed-Hema" target="_blank">Mohamed Hema</a></p>
    </footer>
    </>
  );
}

export default Footer;
