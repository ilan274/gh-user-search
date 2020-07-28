import React from 'react';
import { Divider } from 'semantic-ui-react';
import { Styles } from './Styles';

const Footer = () => {
  return (
    <>
      <Divider />
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ilan-herbach/"
        rel="noopener noreferrer"
      >
        <p style={Styles.footer_text}>
          Made by <span style={Styles.footer_name}>Ilan Herbach</span>
        </p>
      </a>
    </>
  );
};

export default Footer;
