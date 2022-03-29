import React from "react";
import "./Footer.css";
import FooterSvg from "../../assets/images/footer.svg"

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="join">
          <img
            src={FooterSvg}
            alt="The Movie Database (TMDB)"
            width="130"
            height="94"
          />

          <a href="/">
            Join the Community
          </a>
        </div>

        <div >
          <h3>The Basics</h3>
          <ul>
            <li>
              <a href="/">About TMDB</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Support Forums</a>
            </li>
            <li>
              <a href="/">API</a>
            </li>
            <li>
              <a href="/" >
                System Status
              </a>
            </li>
          </ul>
        </div>
        <div >
          <h3>Get Involved</h3>
          <ul >
            <li>
              <a href="/">
                Contribution Bible
              </a>
            </li>
            <li>
              <a href="/">Add New Movie</a>
            </li>
            <li>
              <a href="/">Add New TV Show</a>
            </li>
          </ul>
        </div>
        <div >
          <h3>Community</h3>
          <ul>
            <li>
              <a href="/">Guidelines</a>
            </li>
            <li>
              <a href="/">Discussions</a>
            </li>
            <li>
              <a href="/">Leaderboard</a>
            </li>
            <li>
              <a href="/" >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div >
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="/">Terms of Use</a>
            </li>
            <li>
              <a href="/">API Terms of Use</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
