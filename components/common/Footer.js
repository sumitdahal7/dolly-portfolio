import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    height: 30px;
    p {
        font-size: 13px;
        text-align: center;
        padding: 6px 0;
    }
`

const Footer = () => {
    return (
        <FooterWrapper>
            <p>Thankyou for visiting.</p>
        </FooterWrapper>
    )
}

export default Footer
