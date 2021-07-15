import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components/macro'
import Button from '../Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

const MainSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`

const MainSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const MainSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
     content: '';
     position: absolute;
     z-index: 2;
     width: 100%;
     height: 100vh;
     bottom: 0vh;
     left: 0;
     overflow: hidden;
     opacity: 0.4;
     background: linear-gradient(
         0deg,
         rgba(0, 0, 0, 0.2) 0%,
         rgba(0, 0, 0, 0.2) 50%,
         rgba(0, 0, 0, 0.6) 100%,
     )   
    }
`;

const MainImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const MainContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: white;
    margin-left: 70px;
    margin-top: 350px;

    h1 {
        font-size: 50px;
        font-weight: 700;
        text-shadow: 20px 20px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem
    }

    p {
        font-size: 25px;
        margin-bottom : 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;

`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`

const Main = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)

        console.log(current)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <MainSection>
            <MainWrapper>
                {slides.map((slide, index) => (
                    <MainSlide key={index}>
                        {index === current && (
                            <MainSlider>
                            <MainImage src={slide.image} alt={slide.alt}/>
                            <MainContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button
                                    to={slide.path}
                                    primary='true'
                                    css={`max-width: 160px;`}
                                    >{slide.label}
                                        <Arrow />
                                    </Button>
                            </MainContent>
                        </MainSlider>
                        )}
                        
                    </MainSlide>
                ))}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </MainWrapper>
        </MainSection>
    )
}

export default Main
