import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }

`

export const ButtonRepo = styled.button`
    font-size: 13px;
    background-color:#21262d;
    border: .01px solid #b8b8b8;
    margin: 0 4px 0 0;

    cursor:pointer;
    color:#FAFAFA;

    padding:10px 10px;
    text-decoration:none;

    &: hover {
        background-color: #FAFAFA20;
    } 

`

export const ButtonRemove = styled.button`
    font-size: 13px;
	background-color:#a30000;
	border: 0.2px solid #b8b8b8;
    margin: 0 4px 0 0;

	cursor:pointer;
	color:#FAFAFA;

	padding:10px 10px;
	text-decoration:none;

    &: hover {
	    background-color: #a3000080;
    }      
`