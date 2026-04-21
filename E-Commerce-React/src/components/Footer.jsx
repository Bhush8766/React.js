import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <div className="container">
        <p className="mb-1">
          © {new Date().getFullYear()} Savana. All rights reserved.
        </p>
        <small>
          Designed with ❤️ using React & Bootstrap
        </small>
      </div>
    </footer>
  );
};

export default Footer;