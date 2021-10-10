import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
   margin: 2rem 0;
   @media(max-width: 768px) {
       margin: 0px;
   }
    h2 {
        font-size: 45px;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 30px;
          }
    }
    p {
        font-size: 15px;
        margin-top: 1.5rem;
        line-height: 22px;

        @media(max-width: 768px) {
            padding: 0 8px;
        }
    }
`

const About = () => {
    return (
        <AboutWrapper>
            <div className="container">
            <h2 className="title">About Me</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.</p>

            </div>
        </AboutWrapper>
    )
}

export default About
