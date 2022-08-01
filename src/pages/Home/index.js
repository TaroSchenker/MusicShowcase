import React, { useContext, useState } from 'react'
import MovingText from 'react-moving-text'
import MovingComponent from 'react-moving-text'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ColourContext } from '../../context/ColourContext';

const AnimationsForChaining = ["pulse", "swing", "blur"]

const HomePage = () => {
  const [colour, setColour] = useContext(ColourContext)
  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setCounter(animationIndex+1)
    setAnimationType(selectedItems[animationIndex+1])
  }
  return (
<Container >
    <Row className=' mt-5 justify-content-center align-items-center text-bg-dark text-center'>
        <Col className=' my-5 justify-content-center text-bg-secondary  text-center align-middle'  lg={12}
        style={{height: '50vh', alignContent: 'center', backgroundColor: 'colour'}}
        >
            <MovingText
            onAnimationEnd={handleChainAnimation}
            type={animationType}
            duration="5000ms"
            direction="alternate-reverse"
            timing="ease-in-out"
            iteration="infinite"
            > 
            <h1 className="homeHeader"> Music Showcase</h1>
            </MovingText>
        </Col>
        <Col className='d-inline mb-5 h1 text-bg-warning text-center' >
            <MovingComponent className="homeHeader2" type="typewriter"
            dataText={[
            'Featuring',
            'Cotton Jones',
            'Jim Sullivan'
            ]} />
        </Col>
    </Row>
</Container>  

  )
}

export default HomePage
