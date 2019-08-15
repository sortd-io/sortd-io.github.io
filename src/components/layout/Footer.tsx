import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Badge } from 'antd';
import * as utils from '../utils';
import {Link} from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class Footer extends React.Component<{
  location: {
    pathname: string;
  };
}> {
  handleLangChange = () => {
    const {
      location: { pathname },
    } = this.props;
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }

    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname)),
      );
  };

  render() {
    return (
      <footer id="footer">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <FormattedMessage id="app.footer.quicklinks" />
                </h2>
                <div>
                  <Link to="/">Home</Link>
                </div>
                <div>
                  <Link to="/docs">Documentation</Link>
                </div>
                <div>
                  <Link to="/blog">Blog</Link>
                </div>
                <div>
                <OutboundLink
                    href="https://www.linkedin.com/company/sortdio"
                    target='_blank'
                  >
                  <span><img width={14} src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'/></span>  LinkedIn
                  </OutboundLink>
                </div>
                
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <FormattedMessage id="app.footer.aboutus" />
                </h2>
                <div>
                <b>Sortd.io</b> (ABN: 18633413313)<br/>
                2/397 Riley Street <br/>
                Surry Hills 2010<br/>
                NSW<br/>
                <br/>
                <a href='mailto:info@sortd.io'>info@sortd.io</a>
                </div>
                </div>
            </Col>
           
          </Row>
        </div>
        <div className="bottom-bar">
          Made for you with <span className="heart">❤</span> by
          <a target="_blank" rel="noopener noreferrer" href="https://sortd.io/">
            <FormattedMessage id="app.footer.company" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
