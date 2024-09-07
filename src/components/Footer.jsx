import React from "react";
import {
  addressList,
  desc,
  footerbottomList,
  ItemList,
  ItemTitle,
  quickList,
  quickTitle,
  socialList,
  title,
  tweetList,
  tweetTitle,
} from "./footerData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{desc}</p>
                      <ul className="lab-ul office-address">
                        {addressList.map((item, index) => (
                          <li key={index}>
                            <i className={item.iconName}>{item.text}</i>
                          </li>
                        ))}
                      </ul>
                      <ul className="lab-ul social-icons">
                        {socialList.map((item, index) => (
                          <li key={index}>
                            <a href="#" className={item.className}>
                              <i className={item.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{ItemTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {ItemList.map((item, index) => (
                          <li key={index}>
                            <a href="#">{item.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{quickTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {quickList.map((item, index) => (
                          <li key={index}>
                            <a href="#">{item.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{tweetTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {tweetList.map((item, index) => (
                          <li key={index}>
                           <i className={item.iconName}></i>
                           {item.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
            <div className="section-wrapper">
                <p>&copy; 2024 <Link to='/'>Shop Cart</Link> Designed by <a href="/" target="_blank">Repon</a></p>
                <div className="footer-bottom-list">
                    {
                        footerbottomList.map((item,index)=>(
                            <a href="#" key={index}>{item.text}</a>
                        ))
                    }
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
