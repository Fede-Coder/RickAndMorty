import styled, {css, keyframes} from "styled-components";

const DivDetail = styled.div`
    margin: 0 auto;
    color: white;
    width: 60%;
`

const H1Name = styled.h1`
    background-color: #0190d5;
    backdrop-filter: blur(2px);
    border-radius: 15px 15px 0 0;
    text-align: left;
    padding-left: 15px;
    margin: 0;
`

const DivCard = styled.div`
    background-color: #939393b3;;
    text-align: left;
    backdrop-filter: blur(4px);
`

const DivAvatar = styled.div`    
    display: inline-block;
    padding: 25px;
    position: relative;

    img {
        box-shadow: 0px 0px 10px #464646;
    }
`

const DivInfo = styled.div`
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    padding: 25px;

    h1 {
        margin: 0;
        margin-bottom: 10px;
        border-bottom: 4px solid #a5a5a5;
    }

    div {
        margin: 0 0;
        padding: 10px;
        background-color: #757575;
        font-size: 20px;
        width: 100%;

        &:nth-child(even) {
            background-color: #a0a0a0bc;
        }
    }
`

const pulse = keyframes`
    0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 210, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`

const DivStatus = styled.div `
    background: ${props => props.status === "Alive" ? '#15bc27' : '#a7a7a7'};
	border-radius: 50%;
	height: 20px;
	width: 20px;
    position: absolute;
    top: 5%;
    left: 5%;

    box-shadow: 0 0 0 0 rgba(0, 210, 0, 1);
	transform: scale(1);
	animation: ${props => props.status === "Alive" ? css`${pulse} 2s infinite` : ''};
`

export {
    DivDetail,
    H1Name,
    DivCard,
    DivAvatar,
    DivInfo,
    DivStatus
}