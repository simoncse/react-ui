import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ToggleButton from "../components/ToggleButton";

const IndicatorWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

const Dot = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 10px;
    cursor: pointer;
    background-color: #eee;
    opacity: ${(props) => (props.isActive ? 1 : 0.5)};
    transition: all 350ms ease-in-out;
`;

const Indicator = ({ currentIndex, count, nextSlide }) => {
    return (
        <IndicatorWrapper>
            {Array(count)
                .fill(0)
                .map((_, i) => (
                    <Dot key={i} isActive={currentIndex === i} onClick={() => nextSlide(i)} />
                ))}
        </IndicatorWrapper>
    );
};

const Wrapper = styled.div`
    height: 80vh;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    position: relative;
`;
const ChildrenWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Mask = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
`;

const Slider = styled.div`
    height: 100%;
    width: 100%;
    flex-shrink: 0;
    background-position: center;
    background-size: cover;
    transition: all 350ms ease-in-out;
`;

const ImageSlider = ({ images = [], _autoPlay = false, autoPlayTime = 3000, children, ...props }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const timerRef = useRef(null);
    //pass a index or default to next index if index is not provided.
    function nextSlide(index = currentIndex + 1) {
        const newIndex = index >= images.length ? 0 : index;
        setCurrentIndex(newIndex);
    }

    const handleAutoPlay = () => {
        setAutoPlay(!autoPlay);
    };

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            if (autoPlay) {
                nextSlide();
            }
        }, autoPlayTime);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [currentIndex, autoPlay]);

    return (
        <Wrapper>
            {images.map((url, i) => (
                <Slider
                    key={i}
                    style={{ backgroundImage: `url(${url})`, marginLeft: i === 0 ? `-${currentIndex * 100}%` : undefined }}
                />
            ))}
            <Mask />
            <ChildrenWrapper>
                {children}
                <ul>
                    <ToggleButton on={autoPlay} callback={handleAutoPlay}>
                        Auto Play
                    </ToggleButton>
                </ul>
            </ChildrenWrapper>
            <Indicator count={images.length} currentIndex={currentIndex} nextSlide={nextSlide} />
        </Wrapper>
    );
};

export default ImageSlider;
