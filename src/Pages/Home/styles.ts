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
                display: block ;
            }
        }
        figcaption{
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 20px 30px;
            background: #000;
            opacity: 0.7;
            
            p{
                color: white;
                font-size: 16px;
                margin: 10px 0px;
            }
        }
    }

`