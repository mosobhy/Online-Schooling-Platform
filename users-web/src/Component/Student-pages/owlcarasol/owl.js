import react, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css';

class Owldemo1 extends Component {
  render() {
    return (
      <div className="my-slider">
        <div className='container-fluid' >
          <h2>{this.props.primaryHeader}</h2>
          <p className="p-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, necessitatibus?</p>
        </div>

        <div className='container-fluid' >
          <OwlCarousel items={3}
            className="owl-theme"
            loop
            nav
            margin={8} >
            <div >
              <Card style={{ width: '18rem' }} className="my-card">
                <Card.Img variant="top" src="/image/course1.jpg" />
                <Card.Body>
                  <Card.Title>course 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
            </Card.Text>
                  <Button variant="dark">{this.props.btnText}</Button>
                </Card.Body>
              </Card>
            </div>

            <div >
              <Card style={{ width: '18rem' }} className="my-card">
                <Card.Img variant="top" src="/image/course2.jpg" />
                <Card.Body>
                  <Card.Title>course 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
            </Card.Text>
                  <Button variant="dark">{this.props.btnText}</Button>
                </Card.Body>
              </Card>
            </div>
            <div >
              <Card style={{ width: '18rem' }} className="my-card">
                <Card.Img variant="top" src="/image/course3.jpg" />
                <Card.Body>
                  <Card.Title>course 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
            </Card.Text>
                  <Button variant="dark">{this.props.btnText}</Button>
                </Card.Body>
              </Card>
            </div>

          </OwlCarousel>
        </div>
        <Button className="primary-btn">{this.props.btnTextPrimary}</Button>

      </div>
    )
  }
}
export default Owldemo1;