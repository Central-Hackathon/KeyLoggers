import styled from 'styled-components';

import Athens from '../../assets/athens.jpg';
import Arrow from '../../assets/arr.png';

export const AthensBack = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${Athens});
    background-repeat: no-repeat;
    background-size: 100% 100%
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const HugeTitle = styled.h2`
    color: white;
    font-family: Roboto, open-sans;
    z-index: 1040;
`;

export const StyledArrow = styled.div`
    background-image: url(${Arrow});
    width: 3em;
    height: 3em;
    z-index: 1040;
    transition: all ease-in-out .8s;
    cursor: pointer;
    margin-top: 2em;
    
    animation: pulse 1s infinite;

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.3);
      }
      100% {
       transform: scale(1);
      }
    }
`;

