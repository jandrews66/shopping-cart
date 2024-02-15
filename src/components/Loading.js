import styled, {keyframes} from 'styled-components'

const spinner = keyframes`
to{
 transform: rotate(360deg);
}
`

const Loading = styled.div`
width: 6rem;
height: 6rem;
border: 5px solid #ccc;
border-radius: 50%;
border-top-color: black;
animation: ${spinner} 0.6s linear infinite;

position: fixed;
top: 50%;
left: 50%;
`

export default Loading