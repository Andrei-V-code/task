import React from 'react';

import SectionMessage from '@atlaskit/section-message';
import Spinner from '@atlaskit/spinner';

const Message = () => (
  <div>
    <Spinner />
    <SectionMessage appearance="success">
      <p>File has been uploaded.</p>
    </SectionMessage>
  </div>
);

export default Message;
