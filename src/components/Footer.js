import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-text'>
            © 2022 Bumi Armada Berhad (Company No. 199501041194 (370398-X)). All Rights Reserved.
          </div>
          <div class='social-icons'>
            <div>
              Terms & Conditions
            </div>
            <div>
              Privacy Policy
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
