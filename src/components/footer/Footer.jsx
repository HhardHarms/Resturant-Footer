import React from "react";
import "./footer.css";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import {
  FaGreaterThan,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="main">
      <div className="Foot-cont">
        <div className="Foot-cont1">
          <h1>
            beta<span>Eats</span>
          </h1>
          <div className="foot-cont1-loc1">
            <MdLocationOn className="foot-icn" />
            <div className="foot-cont1-loc-txt">
              <h3>location</h3>
              <p>plot 23/25, alpine avenue, lagos.</p>
            </div>
          </div>
          <div className="foot-cont1-loc2">
            <MdEmail className="foot-icn" />
            <div className="foot-cont1-loc-txt">
              <h3>email</h3>
              <p>support_betaeatz@yahoo.com</p>
            </div>
          </div>
          <div className="foot-cont1-loc3">
            <MdPhone className="foot-icn" />
            <div className="foot-cont1-loc-txt">
              <h3>phone</h3>
              <p>+234 906 896 4699</p>
            </div>
          </div>
        </div>
        <div className="Foot-cont2">
          <div className="Ft-cnt2-txt">
            <h3>quick links</h3>
          </div>
          <div className="Ft-cnt2-list">
            <ul className="li-1">
              <FaGreaterThan className="iccn" />
              <li>home</li>
            </ul>
          </div>
          <div className="Ft-cnt2-list">
            <ul className="li-1">
              <FaGreaterThan className="iccn" />
              <li>orders</li>
            </ul>
          </div>
          <div className="Ft-cnt2-list">
            <ul className="li-1">
              <FaGreaterThan className="iccn" />
              <li>reports</li>
            </ul>
          </div>
          <div className="Ft-cnt2-list">
            <ul className="li-1">
              <FaGreaterThan className="iccn" />
              <li>products</li>
            </ul>
          </div>
          <div className="Ft-cnt2-list">
            <ul className="li-1">
              <FaGreaterThan className="iccn" />
              <li>team</li>
            </ul>
          </div>
          <div className="Ft-cnt2-list">
            <ul className="li-1">
              <FaGreaterThan className="iccn" />
              <li>messages</li>
            </ul>
          </div>
          <div className="Ft-cnt2-list">
            <ul className="li-1">
              <FaGreaterThan className="iccn" />
              <li>support</li>
            </ul>
          </div>
        </div>
        <div className="Foot-cont3">
          <div className="Foot-cont3-txt">
            <h2>contact us</h2>
          </div>
          <div className="Foot-cont3-frrm">
            <input className="frrm" type="text" placeholder="Name" required />
            <input className="frrm" type="email" placeholder="Email" required />
            <input
              className="frrm"
              type="number"
              placeholder="Phone Number"
              required
            />
            <input
              className="frr-mm"
              type="text"
              placeholder="Message"
              required
            />
            <div className="frmmBttn">
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Foot-bttm">
        <div className="Footer-icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaTelegram />
          <FaGithub />
        </div>
        <div className="Foot-bttmTxt">
          <p>
            Copyright © <span>support_betaeats@yahoo.com</span>
          </p>
          <p>| All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
