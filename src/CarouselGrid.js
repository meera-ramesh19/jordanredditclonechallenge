
import React from 'react';
import './CarouselGrid.scss';
const CarouselGrid=()=>{
 return (
<div class='carouselContainer'>

  <div class='carouselContainer__slide'>
    <a href='#e'>
      <img src="https://images.unsplash.com/photo-1460500063983-994d4c27756c?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop&w=1366&h=911&q=80" alt=''/>
    </a>
    <div class='carouselContainer__caption'>
      <div>hello</div>
      <div>beautiful scenery</div>
    </div>
  </div>
  <div class='carouselContainer__slide'>
    <a href="#e">
      <img src="https://images.unsplash.com/photo-1460500063983-994d4c27756c?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop&w=1366&h=911&q=80"  alt=""/>
    </a>
    <div class='carouselContainer__caption'>
      <div>hello</div>
      <div>beautiful scenery</div>
    </div>
  </div>
  <div class='carouselContainer__slide'>
    <a href=" ">
      <img src="https://images.unsplash.com/photo-1460500063983-994d4c27756c?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop&w=1366&h=911&q=80"  alt="" />
    </a>
    <div class='carouselContainer__caption'>
      <div>hello</div>
      <div>beautiful scenery</div>
    </div>
  </div>

  <div class='carouselContainer__slide'>
    <a href="#e">
      <img src="https://images.unsplash.com/photo-1460500063983-994d4c27756c?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop&w=1366&h=911&q=80"  alt="" />
    </a>

    <div class='carouselContainer__caption'>
      <div>hello</div>
      <div>beautiful scenery</div>
    </div>
  </div>

</div>
// <!--REact carousel https://iamdyroz.medium.com/create-a-responsive-react-carousel-image-slider-component-from-scratch-using-react-hooks-eefdcfd42d79 -->
// <!-- <div class="carouselContainer__image">
// <img src="https://images.unsplash.com/photo-1460500063983-994d4c27756c?format=auto&auto=compress&dpr=1&crop=entropy&fit=crop&w=1366&h=911&q=80">
// <div class="carouselContainer__BL">Bottom Left Text</div>
// <div class="carouselContainer__TL" >Top Left Text</div>
// <div class="carouselContainer__TR">Top Right Text</div>
// <div class="carouselContainer__BR">Bottom Right Text</div>
// <div class="carouselContainer__center">Centered Text</div>
// </div> -->
)
}
export default CarouselGrid