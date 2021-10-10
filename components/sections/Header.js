import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { FaEnvelope } from "react-icons/fa"
import { HiLocationMarker, HiMail } from "react-icons/hi"

import Navbar from "../common/Navbar"

const HeightWrapper = styled.div`
  height: 80vh;
  width: 100%;
`

const HeaderWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  background: var(--bg);

  .intro-box {
    min-height: 400px;
    width: 100%;
    max-width: 1120px;
    background: #f8f8f8;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;
    display: flex;
    padding: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
      top: 30%;
      width: 95%;
    }
    .left {
      width: 50%;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    .right {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 2rem;

      @media (max-width: 768px) {
        width: 90%;
        padding-left: 0;
        margin-top: 1rem;
      }
      .intro {
        border-left: 2px solid #000;
        padding-left: 2rem;
        h2 {
          font-size: 60px;
          @media (max-width: 768px) {
            font-size: 40px;
          }

          span {
            background: -webkit-linear-gradient(
              174.81deg,
              #2200f1 -24%,
              rgba(0, 209, 255, 0) 131.87%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        p:nth-child(2) {
          font-size: 24px;
          margin: 1rem 0 0.5rem 0;
          font-weight: 500;
          @media (max-width: 768px) {
            font-size: 20px;
          }
        }
        p:nth-child(3) {
          font-size: 24px;
          font-weight: 500;
          @media (max-width: 768px) {
            font-size: 20px;
          }
        }
      }
      .info {
        /* padding-left: 2rem; */
        margin-top: 2rem;
        @media (max-width: 768px) {
          margin-top: 1rem;
        }
        p {
          display: flex;
          align-items: center;
          margin: 8px 0;
        }
      }
    }
  }
  .motto {
    font-size: 16px;
    color: #f8f8f8;
    text-align: center;
    padding: 8px 0;
  }
`

const Header = ({setShowModal}) => {
  return (
    <HeightWrapper>
      <HeaderWrapper>
        <Navbar setShowModal={setShowModal}/>

        <p className="motto">Some motto</p>
        <div className="intro-box">
          <div className="left">
            <Image
              src="/profile.jpg"
              alt=""
              height="541"
              width="800"
              objectFit="cover"
            />
          </div>
          <div className="right">
            <div className="intro">
              <h2>
                Paul <span>Dooley</span>
              </h2>
              <p>Loan Officer</p>
              <p>NMLS #1123280</p>
            </div>
            <div className="info">
              <p>
                {" "}
                <HiMail style={{ fontSize: "22px", marginRight: "8px" }} />{" "}
                pdooley@phillymb.com
              </p>
              <p>
                {" "}
                <HiLocationMarker
                  style={{ fontSize: "22px", marginRight: "8px" }}
                />{" "}
                New York, USA
              </p>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </HeightWrapper>
  )
}

export default Header
