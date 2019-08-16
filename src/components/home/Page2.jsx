import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'gatsby';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import * as utils from '../utils';
import MailChimpForm from './MailChimpForm';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

function Page2({ location }) {
  const isZhCN = utils.isZhCN(location.pathname);
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>
          Let’s get <span>Sortd</span>
        </h2>

        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <div key="code1" className="subscribe">
              <p key="p" className="page-content">
                <FormattedMessage id="app.home.letspro" />
              </p>

              <MailChimpForm />
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
