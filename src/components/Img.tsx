import React, { useState } from "react";
import styled from "styled-components";
import Product1 from "/public/images/image-product-1.jpg";
import Product2 from "/public/images/image-product-2.jpg";
import Product3 from "/public/images/image-product-3.jpg";
import Product4 from "/public/images/image-product-4.jpg";
import Next from "/public/images/icon-next.svg";
import Previous from "/public/images/icon-previous.svg";
import Product11 from "/public/images/image-product-1-thumbnail.jpg";
import Product12 from "/public/images/image-product-2-thumbnail.jpg";
import Product13 from "/public/images/image-product-3-thumbnail.jpg";
import Product14 from "/public/images/image-product-4-thumbnail.jpg";

const images = [Product1, Product2, Product3, Product4];
const thumbnails = [Product11, Product12, Product13, Product14];

function Img() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.opacity = "0.75";
    document.body.style.backgroundColor = "#000";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.opacity = "1";
    document.body.style.backgroundColor = "";
  };

  return (
    <TWODIV>
      <Slider
        onClick={() => window.innerWidth >= 770 && openModal(currentIndex)}
      >
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

      <NNew0img>
        {thumbnails.map((thumb, index) => (
          <Thumbnail
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </NNew0img>

      {isOpen && (
        <LightboxOverlay onClick={closeModal}>
          <LightboxContainer onClick={(e) => e.stopPropagation()}>
            <NavButton className="previous" onClick={handlePrevious}>
              <img src={Previous} alt="Previous" />
            </NavButton>
            <LightboxContent>
              <LightboxImage
                src={images[currentIndex]}
                alt={`Product ${currentIndex + 1}`}
              />
              <LightboxThumbnails>
                {thumbnails.map((thumb, index) => (
                  <Thumbnail
                    key={index}
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </LightboxThumbnails>
            </LightboxContent>
            <NavButton className="next" onClick={handleNext}>
              <img src={Next} alt="Next" />
            </NavButton>
            <CloseButton onClick={closeModal}>×</CloseButton>
          </LightboxContainer>
        </LightboxOverlay>
      )}
    </TWODIV>
  );
}

const TWODIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Slider = styled.div`
  width: 375px;
  height: 330px;
  position: relative;
  cursor: pointer;
  @media (min-width: 770px) {
    width: 445px;
    height: 445px;
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 375px;
  height: 100%;
  @media (min-width: 770px) {
    width: 100%;
    border-radius: 15px;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;

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

  @media (max-width: 770px) {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  @media (min-width: 770px) {
    border-radius: 15px;
  }
`;

const NNew0img = styled.div`
  display: flex;
  gap: 30px;
  display: none;
  @media (min-width: 770px) {
    display: flex;
  }
`;

const Thumbnail = styled.img`
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  border-radius: 10px;
  cursor: pointer;
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LightboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 90%;
  max-height: 90%;
`;

const LightboxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LightboxImage = styled.img`
  width: 550px;
  height: 550px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const LightboxThumbnails = styled.div`
  display: flex;
  gap: 15px;
`;

const NavButton = styled(Button)`
  display: block;
  background-color: aliceblue;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

export default Img;
