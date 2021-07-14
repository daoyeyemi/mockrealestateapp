import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from '../Button';

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

const MainSlide = styled.div``;
const MainSlider = styled.div``;
const MainImage = styled.div``;
const MainContent = styled.div``;

const Main = ({ slides }) => {
    return (
        <MainSection>
            <MainWrapper>
                {slides.map((slide, index) => (
                    <MainSlide key={index}>
                        <MainSlider>
                            <MainImage/>
                            <MainContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button
                                    to={slide.path}
                                    primary='true'
                                    css={`max-width: 160px;`}
                                    >
                                        <Arrow />
                                    </Button>
                            </MainContent>
                        </MainSlider>
                    </MainSlide>
                ))}
            </MainWrapper>
        </MainSection>
    )
}

export default Main
