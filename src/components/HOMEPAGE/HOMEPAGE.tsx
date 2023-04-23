import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BlackWhiteTopImage_Property1De } from './BlackWhiteTopImage_Property1De/BlackWhiteTopImage_Property1De';
import { BottomHeader } from './BottomHeader/BottomHeader';
import classes from './HOMEPAGE.module.css';
import { TopHeader } from './TopHeader/TopHeader';
import { WhiteDarkTopImage_Property1Def } from './WhiteDarkTopImage_Property1Def/WhiteDarkTopImage_Property1Def';

interface Props {
  className?: string;
}
/* @figmaId 146:120 */
export const HOMEPAGE: FC<Props> = memo(function HOMEPAGE(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.desktop2}>
        <WhiteDarkTopImage_Property1Def
          className={classes.whiteDarkTopImage}
          classes={{ _81BD44E16989415BB4FECD8C766788: classes._81BD44E16989415BB4FECD8C766788 }}
        />
        <BlackWhiteTopImage_Property1De
          className={classes.blackWhiteTopImage}
          classes={{ a447B3F84B3F45398E4690CB18CC8A: classes.a447B3F84B3F45398E4690CB18CC8A }}
        />
        <TopHeader
          className={classes.topHeader}
          classes={{
            _3CDA5BFBEEF449569754DC2B629DF5: classes._3CDA5BFBEEF449569754DC2B629DF5,
            cC38524E53914421AC5214BE5CA56F: classes.cC38524E53914421AC5214BE5CA56F,
          }}
        />
        <BottomHeader
          className={classes.bottomHeader}
          classes={{
            _3CDA5BFBEEF449569754DC2B629DF5: classes._3CDA5BFBEEF449569754DC2B629DF52,
            twitter1: classes.twitter1,
            instagram1: classes.instagram1,
            opensea_logo_icon_2482981: classes.opensea_logo_icon_2482981,
          }}
        />
      </div>
    </div>
  );
});
