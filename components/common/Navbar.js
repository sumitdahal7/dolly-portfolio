import React from "react"
import styled from "styled-components"
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa"

const NavWrapper = styled.div`

  nav {
    display: flex;
    padding-top: 1rem;
    .social {
      display: flex;
      width: 35%;

      .icon {
        background: #fff;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1.5rem 0 0;
        cursor: pointer;
      }
    }
    .quote {
      width: 65%;
      display: flex;
      justify-content: flex-end;

      button {
        margin-left: 1.5rem;
        border: none;
        padding: 8px 16px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
      }
      button:nth-child(1) {
        background: transparent;
        color: #fff;
        border: 1px solid #fff;
      }
      button:nth-child(2) {
        background: rgba(255, 255, 255, 0.4);
        color: #fff;
      }
    }
  }
`

const Navbar = ({setShowModal}) => {
  return (
    <NavWrapper>
      <nav className="container">
        <div className="social">
          <div className="icon">
            {" "}
            <FaFacebookF style={{ color: "#2200f1", fontSize: "14px" }} />
          </div>

          <div className="icon">
            {" "}
            <FaTwitter style={{ color: "#2200f1", fontSize: "14px" }} />
          </div>

          <div className="icon">
            {" "}
            <FaLinkedinIn style={{ color: "#2200f1", fontSize: "14px" }} />
          </div>
        </div>
        <div className="quote">
          <button onClick={() => setShowModal(true)}>GET RATE</button>
          <button onClick={() => setShowModal(true)}>GET QUOTE</button>
        </div>
      </nav>
    </NavWrapper>
  )
}

export default Navbar
