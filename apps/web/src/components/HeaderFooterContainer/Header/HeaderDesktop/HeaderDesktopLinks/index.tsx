import { HEADER_LINKS_LIST } from '@constants/links.constants';

import { Fragment } from 'react';

import MultiLinkGenerator from './MultiLinkGenerator';
import SingleLinkGenerator from './SingleLinkGenerator';

const HeaderDesktopLinks = () => {
  return (
    <>
      {HEADER_LINKS_LIST.map((item, index) => (
        <Fragment key={index}>
          {typeof item.linkTo === 'string' && <SingleLinkGenerator title={item.title} linkTo={item.linkTo} />}
          {typeof item.linkTo === 'object' && <MultiLinkGenerator title={item.title} linkTo={item.linkTo} />}
        </Fragment>
      ))}
    </>
  );
};

export default HeaderDesktopLinks;
