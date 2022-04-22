import React from "react";
import "./Footer.css";
import FooterSvg from "../../assets/images/footer.svg"
import { Link } from "react-router-dom";


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

          <Link to="/signup">
            Join the Community
          </Link>
        </div>

        <div >
          <h3>The Basics</h3>
          <ul>
            <li>
              <Link to="/">About TMDB</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Support Forums</Link>
            </li>
            <li>
              <Link to="/">API</Link>
            </li>
            <li>
              <Link to="/" >
                System Status
              </Link>
            </li>
          </ul>
        </div>
        <div >
          <h3>Get Involved</h3>
          <ul >
            <li>
              <Link to="/">
                Contribution Bible
              </Link>
            </li>
            <li>
              <Link to="/">Add New Movie</Link>
            </li>
            <li>
              <Link to="/">Add New TV Show</Link>
            </li>
          </ul>
        </div>
        <div >
          <h3>Community</h3>
          <ul>
            <li>
              <Link to="/">Guidelines</Link>
            </li>
            <li>
              <Link to="/">Discussions</Link>
            </li>
            <li>
              <Link to="/">Leaderboard</Link>
            </li>
            <li>
              <Link to="/" >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div >
          <h3>Legal</h3>
          <ul>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">API Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
