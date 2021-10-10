import React from 'react'
import styled from 'styled-components'
import Card from '../common/Card'
import CardSlider from '../common/CardSlider'

const places = [
    {
      id: 1,
      name: "Bhaktapur Durbar Square",
      location: "Bhaktapur",
      price: 1200,
      image:
        "https://images.pexels.com/photos/4028816/pexels-photo-4028816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      name: "Patan Durbar Square",
      location: "Patan",
      price: 1100,
      image:
        "https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      name: "Basantpur Durbar Square",
      location: "Basantpur",
      price: 900,
      image:
        "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 4,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/4028816/pexels-photo-4028816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 5,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 6,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 7,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 8,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 9,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 10,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
  ]


const WorksWrapper = styled.div`
    background: #EBEEF2;
    width: 100%;
    min-height: 300px;
    margin-top: 2rem;
    padding: 1rem 0;
    h2 {
        font-size: 45px;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 30px;
          }
    }
`

const Works = () => {
    return (
        <WorksWrapper>
           <div className="container">
           <h2 className="title">My Works</h2>
            <CardSlider> 
                {places?.map(place => <Card key={place.id} place={place}/>)}
            </CardSlider>
           </div>
        </WorksWrapper>
    )
}

export default Works
