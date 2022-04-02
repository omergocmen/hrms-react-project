import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function Footer() {
  return (
    <div className="footerSection" style={{ marginTop: "8rem" }}>
    <hr />
    <div className="ui vertical segment" style={{ padding: "5em 0em" }}>
      <div className="ui container">
        <div className="ui stackable  grid">
          <div className="row">
            <div className="three wide column">
              <h4 className="ui header">About</h4>
              <div role="list" className="ui  link list">
                <p role="listitem" className="item">
                  Sitemap
                </p>
                <a role="listitem" className="item">
                  Contact Us
                </a>
                <a role="listitem" className="item">
                  Religious Ceremonies
                </a>
                <a role="listitem" className="item">
                  Gazebo Plans
                </a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui header">Products</h4>
              <div role="list" className="ui link list">
                <a role="listitem" className="item">
                  Banana Pre-Order
                </a>
                <a role="listitem" className="item">
                  DNA FAQ
                </a>
                <a role="listitem" className="item">
                  How To Access
                </a>
                <a role="listitem" className="item">
                  Favorite X-Men
                </a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui header">Services</h4>
              <div role="list" className="ui link list">
                <a role="listitem" className="item">
                  Banana Pre-Order
                </a>
                <a role="listitem" className="item">
                  DNA FAQ
                </a>
                <a role="listitem" className="item">
                  How To Access
                </a>
                <a role="listitem" className="item">
                  Favorite X-Men
                </a>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui header">Footer Header</h4>
              <p>
                Extra space for a call to action inside the footer that
                could help re-engage users.
              </p>
              <div className="socialMedia" style={{fontSize:"2rem"}}>
                <Icon className="youtube"></Icon>
                <Icon className="facebook"></Icon>
                <Icon className="twitter"></Icon>
                <Icon className="linkedin"></Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
