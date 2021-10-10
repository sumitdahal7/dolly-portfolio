import React from "react"
import styled from "styled-components"
import CardSlider from "../common/CardSlider"
import TestimonialCard from "../common/TestimonialCard"

const TestimonialWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  background: linear-gradient(180deg, #473ff1 -43.13%, #86e7f5 100%);
  .container {
    h2 {
      color: #fff !important;
      font-size: 45px;
      text-align: center;
      padding: 1rem 0;
      @media (max-width: 768px) {
        font-size: 30px;
        padding: 0.5rem 0;
      }
    }

    .title {
    }
  }
`

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <div className="container">
        <h2 className="">What peoples say about me</h2>
        <CardSlider>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </CardSlider>
      </div>
    </TestimonialWrapper>
  )
}

export default Testimonial
