import styled  from "styled-components";
import colors from '../../Assets/styles/colors.json';

export const Container = styled.div`
    h1{
        color: ${colors.title};
    }

    figure{
        position: relative;
        width: 421px;
        height: 614px;
        &:hover{
            > figcaption{
                transform: scale3d(1, 1, 1);
                visibility: visible;
                background-color: rgba(0, 0, 0, 1);
                opacity: 0.8;
            }
        }
        figcaption{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 20px 30px;
            background: #000;
            opacity: 0;
            visibility: hidden;
            transform-origin: top center;
            transform: scale3d(1, 0, 1);
            transition: 1s;
            p{
                color: white;
                font-size: 16px;
                margin: 90px 0px 0px 0px;
            }
        }
    }

`