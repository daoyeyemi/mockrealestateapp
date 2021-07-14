import React from 'react'
import styled, { css } from 'styled-components/macro'

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

const Main = () => {
    return (
        <MainSection>
            <MainWrapper>
                <h1>
                    Yooooo
                </h1>
            </MainWrapper>
        </MainSection>
    )
}

export default Main
