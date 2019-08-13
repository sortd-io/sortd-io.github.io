import React from 'react';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button, Carousel } from 'antd';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { isZhCN, getLocalizedPathname } from '../utils';
import Snapshot from '../../images/Snapshot.png';
import Readiness from '../../images/Readiness.png';
import Sizing from '../../images/Sizing Wizard.png';
import HALF_LOGO_URL from '../../images/half-logo.png';

import 'html5-device-mockups';


function Banner(props) {
  
  const { isMobile, location } = props;
  return (
    <div className="banner-wrapper">
      {isMobile && (
         <TweenOne animation={{ opacity: 1 }} height="100%" className="banner-image-wrapper">
         <div className="device-wrapper" style={{ maxWidth: '100%' }}>
           <div
             className="device"
             data-device="MacbookPro"
             data-orientation="portrait"
             data-color="black"
           >
             <div className="screen">
               <Carousel className="home-banner-anim" autoplay>
                 <div padding="12px">
                   <img width="100%" height="100%" alt="Change Snapshot" src={Snapshot} />
                 </div>
                 <div padding="12px">
                   <img width="100%" height="100%" alt="Readiness Assessment" src={Readiness} />
                 </div>
                 <div padding="12px">
                   <img width="100%" height="100%" alt="Project Sizing" src={Sizing} />
                 </div>
               </Carousel>
             </div>
           </div>
         </div>
       </TweenOne>
      )}
      <QueueAnim className="banner-title-wrapper" type={isMobile ? 'bottom' : 'right'}>
        <div key="line" className="title-line-wrapper">
          <div className="title-line" style={{ transform: 'translateX(-64px)' }} />
        </div>
        <h1 key="h1">
          <img src={HALF_LOGO_URL} width={160} />
        </h1>
        <p key="content">
          <FormattedMessage id="app.home.slogan" />
        </p>
        <div key="button" className="button-wrapper">
          
          <Link to={getLocalizedPathname('/docs/introduction', isZhCN(location.pathname))}>
            <Button style={{ margin: '0 16px' }} type="primary" ghost>
              <FormattedMessage id="app.home.start" />
            </Button>
          </Link>
          <GitHubButton
            key="github-button"
            type="stargazers"
            namespace="sortd-io"
            repo="sortd-website"
          />
        </div>
      </QueueAnim>
      {!isMobile && (
        <TweenOne animation={{ opacity: 1 }} height="100%" className="banner-image-wrapper">
          <div className="device-wrapper" style={{ maxWidth: '100%' }}>
            <div
              className="device"
              data-device="MacbookPro"
              data-orientation="portrait"
              data-color="black"
            >
              <div className="screen">
                <Carousel className="home-banner-anim" autoplay>
                  <div padding="12px">
                    <img width="100%" height="100%" alt="Change Snapshot" src={Snapshot} />
                  </div>
                  <div padding="12px">
                    <img width="100%" height="100%" alt="Readiness Assessment" src={Readiness} />
                  </div>
                  <div padding="12px">
                    <img width="100%" height="100%" alt="Project Sizing" src={Sizing} />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </TweenOne>
      )}
    </div>
  );
}

export default Banner;
