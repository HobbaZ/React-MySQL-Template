import image from '../images/firmbee-com-SpVHcbuKi6E-unsplash.jpg';
import Container from 'react-bootstrap/Container';
import '../App.css'

const HeroImage = () => {
    return (
      <>
      <Container fluid>
          <div className='text-center'>
          <img src={image} className="imageStyle" alt="Photo by firmbee on Upsplash"/>
          </div>
      </Container>
      </>
    );
    };
    
    export default HeroImage;