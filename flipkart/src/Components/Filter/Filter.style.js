import styled from 'styled-components'

export const Title = styled.h3`
    text-align: center;
    padding: 10px 0;
`
export const Wraper = styled.div`
    width: 100%;
`
export const FilterInput = styled.div`
    width: 100%;
    padding: 10px;
    input{
        width: 100%;
        margin: 10px 0;
        padding: 5px;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        button{
            padding: 5px 10px;
            border: none;
            outline: none;
            width: 48%;
            cursor: pointer;
            transition: all .3s ease-in;
            &:hover{
                background-color: rgba(0,0,0,.3);
            }
        }
    }
`