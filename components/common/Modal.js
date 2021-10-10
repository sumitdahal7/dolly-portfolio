import { useState, useEffect } from "react"
import styled from "styled-components"
import { BiX } from 'react-icons/bi'

const ModalWrapper = styled.div`
  .backdrop {
    max-height: 100vh;
    max-width: 98.9vw;
    height: 100vh;
    width: 98.9vw;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    position: fixed;
    z-index: 51;
  }

  .contents {
    min-height: 300px;
    width: 400px;
    background: var(--col-white);
    position: fixed;
    z-index: 52;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    padding: 1rem;

    h2 {
      margin-bottom: 1.5rem;
    }

    .fields {
      height: 100%;
      margin-top: 8px;
    }
  }
`

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }
  return (
    show ?<ModalWrapper>
      <div className="backdrop" onClick={() => onClose()}></div>
      <div className="contents">
        <BiX onClick={handleCloseClick} style={{position: 'absolute', right: '8px', fontSize: '22px', top: '8px', cursor: 'pointer'}}/>
        <h2>{title}</h2>
        <div className="fields">
          {children}
        </div>
      </div>
    </ModalWrapper>: null
  )
}

export default Modal
