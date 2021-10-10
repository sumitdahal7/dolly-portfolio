import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"

const CardWrapper = styled.section`
  height: 160px;
  min-width: 300px;
  width: 300px;
  border-radius: 4px;
  overflow: hidden;
  background: red;
  position: relative;
  &:hover .overlay {
      top: 0;
  }


  .image {
    width: 100%;
  }
  .overlay {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: -100%;
    left: 0;
    /* display: none; */
    transition: 0.3s;
    padding: 1rem;
    h3 {
        color: #fff;
        font-size: 14px;
    }
    p {
        color: #fff;
        font-size: 12px;
        margin-top: 9px;
    }
  }
`

const Card = ({ place }) => {
  const { name, location, price, image } = place
  return (
    <CardWrapper>
      <div className="image">
        <Image src={image} alt="" height="250" width="244" objectFit="cover" />
      </div>
      <div className="overlay">
       <h3>Work Title</h3>
       <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum I</p>
      </div>
    </CardWrapper>
  )
}

export default Card
