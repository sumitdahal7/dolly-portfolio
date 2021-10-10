



import { useState, useEffect, useRef } from 'react'
import Card from './Card'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'


const SliderWrapper = styled.div`
    position: relative;
    max-width: 1120px;
    margin: 2rem auto;
    .cards {
        width: 100%;
        display: flex;
        overflow-x: scroll;
        scroll-behavior: smooth;
        scrollbar-highlight-color: transparent;

        ::-webkit-scrollbar {
            width: 0;  /* Remove scrollbar space */
            background: transparent;  /* Optional: just make scrollbar invisible */
        }
        section {
            margin-right: 2.2rem;
            min-width: 244px;
        }
        section:last-child {
            margin-right: 0 !important;
        }
    }

    button {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: rgba(255, 255, 255, .5);
        color: var(--col-brand);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &:hover {
            background: #ccc;
        }
    }

    .left-btn {
        position: absolute;
        left: 0;
    }
    .right-btn {
        position: absolute;
        right: 0;
    }
    
`

const CardSlider = ({children}) => {
    const [currentWidth, setCurrentWidth] = useState()
    const ref = useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    useEffect(() => {
      setCurrentWidth(ref?.current?.offsetWidth)
    }, [])
    return (
        <SliderWrapper>
            <div className="cards" ref={ref}>
               {children}
            </div>
            <button className="right-btn" onClick={() => scroll(currentWidth)}><MdKeyboardArrowRight /></button>
            <button className="left-btn" onClick={() => scroll(-Number(currentWidth))}><MdKeyboardArrowLeft /></button>
        </SliderWrapper>
    )
}

export default CardSlider

