import styled from "styled-components"
import { Link } from 'react-router-dom';

export const Wraper = styled.div`
    width: 100%;
    height: 60px;
    //background: rgba(255,255,255,.3);
    //background:linear-gradient(to right,#1ab195 ,#91c944);
    background: ${({ user }) => (user ? "linear-gradient(to right,#1ab195 ,#91c944)" : "rgba(255,255,255,.3)")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
`;

export const Title = styled.h1`
    font-size: 25px;
    color: white;
`;

export const NavMenu = styled.ul`
    display: flex;
    padding: 0 20px;
`;

export const NavItem = styled.li`
    list-style: none;
    margin: 0 20px;
    padding: 0 10px;
    cursor: pointer;
    font-size: 18px;
`;

export const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
`