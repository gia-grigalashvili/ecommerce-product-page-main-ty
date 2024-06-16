import React, { useState } from "react";
import styled from "styled-components";
import Product1 from "/public/images/image-product-1.jpg";
import Product2 from "/public/images/image-product-2.jpg";
import Product3 from "/public/images/image-product-3.jpg";
import Product4 from "/public/images/image-product-4.jpg";
import Next from "/public/images/icon-next.svg";
import Previous from "/public/images/icon-previous.svg";

const images = [Product1, Product2, Product3, Product4];

function Img() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Slider>
        <ImageContainer>
          <Button className="previous" onClick={handlePrevious}>
            <img src={Previous} alt="Previous" />
          </Button>
          <Image
            src={images[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
          />
          <Button className="next" onClick={handleNext}>
            <img src={Next} alt="Next" />
          </Button>
        </ImageContainer>
      </Slider>

      <div></div>
    </div>
  );
}

const Slider = styled.div`
  width: 375px;
  height: 330px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 375px;
  height: 100%;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);

  &.previous {
    left: 10px;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background-color: aliceblue;
    border-radius: 50%;
  }

  &.next {
    right: 10px;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    background-color: aliceblue;
    border-radius: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
`;

export default Img;
