import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const WorkAreaWrapper = styled.div`
    .container{
        .map{
            width: 100%;
            height: 400px;
            margin: 4rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            @media(max-width: 768px) {
                margin: 0;
            }
        }
    }
`

const WorkArea = () => {
    return (
        <WorkAreaWrapper>
           <div className="container">
               <h2 className="title">Where I am licenced to work</h2>
               <div className="map">
                    <Image src="/Map.png" alt="" height="450" width="700" />
               </div>
           </div>
        </WorkAreaWrapper>
    )
}

export default WorkArea
