import React from "react"
import styled from "styled-components"
import Image from "next/image"

const ContactWrapper = styled.div`
  min-height: 400px;
  background: #ebeef2;
  padding: 1rem 0;
  width: 100%;
  .container {
    max-width: 900px !important;
    .flex-wrapper {
      display: flex;
      margin-top: 2rem;
      /* align-items: center; */
      /* justify-content: space-between; */
      @media(max-width: 768px) {
           flex-direction: column;
          }
        .left {
            @media(max-width: 768px) {
           margin: 1rem auto;
           
          }
        }
      form.right {
        margin-left: 2rem;
        @media(max-width: 768px) {
          width: 80%;
           
          }
        .textarea {
            margin-top: 1.5rem;
        }
        button {
            border: none;
            padding: 8px 16px;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            background: #6896F3;
            color: #fff;
            margin-top: 1.4rem;
            border-radius: 4px;
        }
        .grid-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 2rem;

          @media(max-width: 768px) {
            grid-template-columns: 1fr;
          }
          .left {
            @media(max-width: 768px) {
             display: none;
          }
          }
        }
        .form-group {
          display: flex;
          flex-direction: column;
          label {
            font-size: 10px;
            font-weight: 600;
            margin-bottom: 3px;
          }
          input {
            border: none;
            background: #fff;
            height: 30px;
            width: 250px;
            @media(max-width: 768px) {
          width: 100%;
           
          }
          }
          textarea {
            width: 100%;
            height: 150px;
            border: none;
            background: #fff;
          }
        }
      }
    }
  }
`

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="container">
        <h2 className="title">Contact Me</h2>
        <div className="flex-wrapper">
          <div className="left">
            <Image
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              height="400"
              width="300"
            />
          </div>
          <form className="right">
            <div className="grid-wrapper">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Phone No.</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-group textarea">
              <label>Message</label>
              <textarea></textarea>
            </div>
            <button>SEND</button>
          </form>
        </div>
      </div>
    </ContactWrapper>
  )
}

export default Contact
