import styled  from "styled-components";
import colors from '../../Assets/styles/colors.json';

export const Container = styled.div`
    h1{
        color: ${colors.title};
    }

    figure{
        picture{
            img{
                width: 300px;
                height: 300px;
                &:hover{
                    width: 330px;
                    height: 330px;
                }
            }
        }
        figcaption{
            p{
                color: white;
                font-size: 14px;
                margin: 10px 0px;
            }
        }
    }

`