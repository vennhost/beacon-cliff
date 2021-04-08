import React, { useState } from "react";
import {
  UncontrolledCarousel,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import img1 from "../../static-images/slides/1.jpg";
import img2 from "../../static-images/slides/2.png";
import img3 from "../../static-images/slides/3.jpg";

const items = [
  {
    src: img3,
    altText: "Slide 1",
    caption: "We are Ready to Move",
    header: "You can trust us for your lifting",
    key: "1",
    height: "400px",
    width: "1300px",
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Safety",
    header: "Safety is a priority here, we are always mindful of you",
    key: "2",
    height: "400px",
    width: "1300px",
  },
  {
    src: img1,
    altText: "Slide 3",
    caption: "Professionalism",
    header: "We handle your loads in a professional way",
    key: "3",
    height: "400px",
    width: "1300px",
  },
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          width={item.width}
          height={item.height}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Slider;
