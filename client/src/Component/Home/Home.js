import React, { Component } from 'react';
import ImageRenderer from '../util/ImageRenderer';
import Footer from '../Footer/FooterPage';

const images = [
  { src: "resources/Photos/Header/2.jpeg" },
  { src: "resources/Photos/Header/3.jpeg" },
  { src: "resources/Photos/Header/4.jpeg" },
  { src: "resources/Photos/Header/5.jpeg" },
  { src: "resources/Photos/Header/7.jpeg" },
  { src: "resources/Photos/Header/8.jpeg" },
  { src: "resources/Photos/Header/9.jpeg" },
];

class Home extends Component {
  render() {
    return (
      <div>
          <h2>Welcome to Farm eShop</h2>
          <br></br>
          <p class="long-copy"> Farm eShop is a farm offering fresh home grown from the farm. we love to see them undercutting supermarket prices by avoiding middle men margins yet selling fresher, better food.</p>
          <br></br>
        <div >

          <div class="row">
            <div class="col span-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--1">
                    &nbsp;
                </div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">Fruits</span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>Free Delivery</li>
                      <li>10% Discount</li>
                    </ul>
                    <button className="btn btn1-color">Shop now!</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="col span-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--2">
                    &nbsp;
                </div>
                  <h4 class="card__heading card__heading-span--2">
                    <span>Vegetables</span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>Free Delivery</li>
                      <li>10% Discount</li>
                    </ul>
                    <button className="btn btn2-color">Shop now!</button>
                  </div>

                </div>

              </div>
            </div>


            <div class="col span-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--3">
                    &nbsp;
                </div>
                  <h4 class="card__heading card__heading-span--3">
                    <span >Gloceries</span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>Free Delivery</li>
                      <li>10% Discount</li>
                    </ul>
                    <button className="btn btn3-color">Shop now!</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}

export default Home;
