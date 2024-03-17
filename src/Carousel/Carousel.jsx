
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function IndividualIntervalsExample() {
  return (
    <div>
    <Carousel className='main'>
      <Carousel.Item interval={1000}>
        <img className='mainbanner' src='https://cdn.dribbble.com/userupload/12379122/file/original-225e56e560531de5149096f2af070302.png?resize=1024x1024&vertical=center' alt='banner' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='mainbanner' src='https://cdn.dribbble.com/users/248422/screenshots/10037393/media/c67d747292634dfbbc67b95529fb86d0.png?resize=768x576&vertical=center' alt='banner' text="Second slide" />
        <Carousel.Caption>
          <h3>Collection of latest sport shows</h3>
          <p>Get the latest trends in sport shows</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='mainbanner' src='https://cdn.dribbble.com/userupload/7385865/file/original-f1d7f1d2ee4e85a6ffda22bcdfacead7.jpg?resize=640x480&vertical=center' alt='banner' text="Third slide" />
        <Carousel.Caption>
          <h3>Perfume Collection</h3>
          <p>
            Get the latest trends in perfumes
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='mainbanner' src='https://cdn.dribbble.com/users/1889463/screenshots/4397815/giopato_coombes_dribbble.jpg?resize=640x480&vertical=center' alt='banner' text="Third slide" />
        <Carousel.Caption>
          <h3>Home Collection</h3>
          <p>
            Get the latest trends in home
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='mainbanner' src='https://cdn.dribbble.com/userupload/5557645/file/original-abb3e41fd1230b15a1418662cc82e152.jpg?resize=1024x768' alt='banner' text="Third slide" />
        <Carousel.Caption>
          <h3>Men's Collection</h3>
          <p>
            Get the latest trends in mens
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='mainbanner' src='https://cdn.dribbble.com/userupload/5484543/file/original-35cf5ffd7b164e116e713e2e90914206.jpg?resize=1024x768' alt='banner' text="Third slide" />
        <Carousel.Caption>
          <h3>Beauty</h3>
          <p>
            Get the latest trends in beauty
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='mainbanner' src='https://cdn.dribbble.com/users/7135249/screenshots/18268269/media/8211e5b73ec396609492a348e0a0c7b0.png?resize=768x576&vertical=center' alt='banner' text="Third slide" />
        <Carousel.Caption>
          <h3>Macbook Air</h3>
          <p>
            Get the latest update of the macbook air
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='mainbanner' src='https://cdn.dribbble.com/userupload/11470197/file/original-3485b9943f17ae96e33f65ff3d16e0a1.jpg?resize=1024x636' alt='banner' text="Third slide" />
        <Carousel.Caption>
          <h3>Denims</h3>
          <p>
            Get the latest trends in denims
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='mainbanner' src='https://cdn.dribbble.com/userupload/11863775/file/original-6009708366fadd352f61fbaf0db5acee.png?resize=1024x728' alt='banner' text="Third slide" />
        <Carousel.Caption>
          <h3>15 pro max</h3>
          <p>
            get the latest update of the 15 pro max and more
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default IndividualIntervalsExample;
