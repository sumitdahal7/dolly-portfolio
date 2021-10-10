import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const CardWrapper = styled.section`
    height: 150px;
    min-width: 350px !important;
    background: #F8F8F8;
    border-radius: 4px;
    padding: 1rem;
    /* margin: 0 2.2rem 0 0; */
    .top {
        display: flex;
        align-items: center;
        .left {
            height: 60px;
            width: 60px;
            border-radius: 50%;
            overflow: hidden;
        }
        .right {
            margin-left: 1rem;
            .name {
                font-weight: 500;
            }
            .post {
                font-size: 13px;
            }
        }
    }
    .bottom {
        margin-top: 8px;
        p {
            font-size: 12px;
        }
    }
`

const TestimonialCard = () => {
    return (
        <CardWrapper>
           <div className="top">
               <div className="left">
                   <Image src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" height="60" width="60"/>
               </div>
               <div className="right">
                   <p className="name">Cristina James</p>
                   <p className="post">Accountant</p>
               </div>
           </div>
           <div className="bottom">
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
           </div>
        </CardWrapper>
    )
}

export default TestimonialCard
