import './App.css';
function App() {
  return (
    <div className="App">
      <div className="intro-div">
        <h1 className="intro-header">Cuppa Joe Cafe</h1>
        <button className="intro-button">View Menu</button>
      </div>
      <div className="socials-div">
        <h1 className='socials-header'>Find us on - </h1>
        
      </div>
      <div className="hours-div">
        <h1 className="hours-header">Our Hours</h1>
        <ul className="hours-list">
          <li className="hours-item">Sunday: 8:00am - 3:00pm</li>
          <li className="hours-item">Monday: 7:00am - 5:00pm</li>
          <li className="hours-item">Tuesday: 7:00am - 5:00pm</li>
          <li className="hours-item">Wednesday: 7:00am - 8:00pm</li>
          <li className="hours-item">Thursday: 7:00am - 5:00pm</li>
          <li className="hours-item">Friday: 7:00am - 5:00pm</li>
          <li className="hours-item">Saturday: 8:00am - 3:00pm</li>
        </ul>
      </div>
      <div className="map-div">
        <h1 className="map-header">Where We Are</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12593.509060022763!2d-78.32186330907221!3d37.89824367737976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b3ecbf6dbc22ef%3A0x625f304d86c8ab5b!2sCuppa%20Joe!5e0!3m2!1sen!2sus!4v1665317827636!5m2!1sen!2sus" className='store-map'allowfullscreen="" loading="lazy" title='cuppa-joe-map'></iframe>
        <p className="map-address">90 Joshua Ln, Palmyra, VA 22963</p>
      </div>
      <div className="reviews-div">
        <h1 className="reviews-header">Testimonials</h1>
        <div className='review'>
          <p className="review-text pic-right">What makes Cuppa Joe absolutely perfect? The perfect cuppa joe served with a smile. Not sleek and shiny, but what they do, they do exceptionally well.
          <span className='review-name'> -Rob</span>
          </p>
          <img src={require("./images/hot-1.jpg")} alt="coffee cups" className='review-image'/>
        </div>
        <div className='review'>
        <img src={require("./images/cold-1.jpg")} alt="coffee cups" className='review-image'/>
          <p className="review-text pic-left">Love Cuppa Joe! Delicious sandwiches and fantastic tea and coffee selection. Great local place!
          <span className='review-name'> -Sarah</span>
          </p>
          
        </div>
        <div className='review'>
          <p className="review-text pic-right">Great coffee pleasant atmosphere and polite staff. Food was great and a good selection of pastries, ice cream, breakfast foods and assorted other items.
          <span className='review-name'>-Chuck</span>
          </p>
          <img src={require("./images/hot-1.jpg")} alt="coffee cups" className='review-image'/>
        </div>
      </div>
    </div>
  );
}

export default App;
