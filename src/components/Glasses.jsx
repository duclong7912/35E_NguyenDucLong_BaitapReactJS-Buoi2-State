import React, { Component } from "react";
import Model from "../assets/img/model.jpg";

let arrGlasses = [
  {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./img/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./img/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 3,
      "price": 30,
      "name": "DIOR D6700HQ",
      "url": "./img/v3.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "./img/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 5,
      "price": 40,
      "name": "PRADA P8750",
      "url": "./img/v5.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 6,
      "price": 60,
      "name": "PRADA P9700",
      "url": "./img/v6.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 7,
      "price": 80,
      "name": "FENDI F8750",
      "url": "./img/v7.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 8,
      "price": 100,
      "name": "FENDI F8500",
      "url": "./img/v8.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 9,
      "price": 60,
      "name": "FENDI F4300",
      "url": "./img/v9.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
]

export default class Glasses extends Component {

  state = {
    img: '',
    mainImg: "./img/v7.png",
    name: 'FENDI F8750',
    info: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
  }


  renderGlasses = () => {
    return arrGlasses.map((glasse, index)=> {
      return <img src={glasse.url} key={index} onClick={() => {
        {this.getGlasses(glasse.url, glasse.name, glasse.desc)}
      }} />
    })
  }

  getGlasses = (url, name, info) => {
    this.setState({
      img: url,
      mainImg: url,
      name: name,
      info: info,
    })
  }

  render() {

    return (
      <div className="background">
        <div className="overlay-bg">
          <div className="header">try glasses app online</div>
          <div className="body">
            <div className="body-img d-flex align-items-center justify-content-between">
              <div className="model">
                <img src={this.state.mainImg} alt="" />
                <div className="info">
                  <h5>{this.state.name}</h5>
                  <p>{this.state.info}</p>
                </div>
              </div>
              <div className="model">
                <img src={this.state.img} alt="" />
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer__item">
              {this.renderGlasses()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
