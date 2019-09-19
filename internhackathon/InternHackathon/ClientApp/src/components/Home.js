import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { Card } from 'reactstrap'
import './Home.css'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <img className="titleImage" src={"https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Olive_Garden_Logo.svg/1200px-Olive_Garden_Logo.svg.png"} width="40%" />

            <h1 className="titleStyle">Hello, Olive Garden!</h1>
            <Card style={{ padding: '10px' }}>
                <h2 className="storeNumber">Store #123456</h2>
                <img src={"https://jobs.olivegarden.com/Content/OliveGarden/Images/photos/olive-garden-hourly-jobs-485x271.jpg"} width="100%" />
            <h5>Our Mission</h5>

            <p>At Olive Garden, we want the experience of warmth and caring to extend beyond our restaurant walls and into every 
                community where we live and serve. Our restaurants throughout the US and Canada are committed to giving back to their
                communities through a variety of local efforts, such as delivering meals in times of need and supporting local non-profits and organizations. 
                Restaurants als participate in various company-wide community relations programs.
            </p>
            <h5>Our Employees</h5>
                <p>46 Employees in this location...</p>
                <img src={"https://media.olivegarden.com/images/site/pages/careers_hero_0614.jpg"} width="100%" />

                <h5>Contact</h5>
                <h6><strong>Address</strong></h6>
                <p>4001 W Airport Fwy, Irving, TX 75062 </p>
                <h6><strong>Call</strong></h6>
                <p>(972)258-5191</p>
            </Card>
      </div>

    );
  }
}
