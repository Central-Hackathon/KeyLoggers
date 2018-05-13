import React, {Component} from 'react';
import {AthensBack, HugeTitle, StyledArrow, StyledSoftBackground} from '../../components/Header/styles';


class Header extends Component {
  render() {
    return (
      <div>
        <AthensBack>

            <HugeTitle>
              Εξερεύνησε την πόλη σου.
            </HugeTitle>
            <StyledArrow/>
            <div style={{
              background:'black',
              opacity: 0.6,
              width: '25em',
              height:'15em',
              borderRadius:'7px',
              position: 'absolute',
              zIndex: 50
            }}>

            </div>
        </AthensBack>
      </div>
    );
  }
}


export default Header;
