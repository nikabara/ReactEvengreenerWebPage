import Carousel from '../../node_modules/react-bootstrap/esm/Carousel';
import '../Components/RunnerText.css';

export function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='carousel-background'>
      <Carousel.Item className='carouselItem'>
        <div className='centering-div'>
          <a className='slide-paragraphs' href=''>Get 10% Off With EvenGreener November</a>
        </div>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <div className='centering-div'>
          <a className='slide-paragraphs' href=''>Free Uk Delivery £10*</a>
        </div>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <div className='centering-div'>
          <a className='slide-paragraphs' href=''>Earn 2X Points For Every 1£ Spent</a>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}