import styled, { keyframes } from 'styled-components'

const P = styled.p`
    font-size: 24px;
    color: red;
`
const Content = styled.div`
    padding: 20px 25px;
`
const Button = styled.button`
    transition: box-shadow 0.2s ease;
    background-color: ${(props) => (props.primary ? 'red' : 'white')};
    // background-color: ${(props) => (props.secondary ? 'yellow' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'red')};
    padding: 15px;
    border: solid 2px red;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;

    &:hover {
        box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.6);
    }

    &.secondary {
        background-color: blue;
        border: solid 2px blue;
        color: white;
    }
`
const BlockButton = styled(Button)`
    width: 100%;
    font-size: 24px;
`
const Link = ({ className, ...props }) => {
    return <a className={className} {...props}></a>
}
const StyledLink = styled(Link)`
    color: blue;
`
const Input = styled.input.attrs((props) => ({
    type: 'test',
    color: props.color || 'red',
}))`
    font-size: 20px;
    border: solid 2px green;
    color: ${(props) => props.color};
`
const Password = styled(Input).attrs({
    type: 'password',
})``

const girar = keyframes`
from{
transform: rotate(0deg);
}
to{
transform: rotate(360deg)
}
`
const Rotar = styled.div`
    display: inline-block;
    animation: ${girar} 10s linear infinite;
`

function App() {
    return (
        <Content>
            <P>hola, soy un parrafo</P>
            <Button>Enviar</Button>
            <Button primary>Check</Button>
            <Button className="secondary">Check2</Button>
            <br />
            <BlockButton> bloke</BlockButton>
            <BlockButton primary> bloke2</BlockButton>
            {/**modificamos el compòrtamiento de nuestro elemento 'BlockButton' 
            con la propiedad 'as'**/}
            <br />
            <BlockButton as="a" href="#">
                bloke2
            </BlockButton>
            <BlockButton>block3</BlockButton>
            <Link>link</Link>
            <br />
            <StyledLink>link con estilo</StyledLink>
            <br />
            <Input placeholder="in 1" color="blue" />
            <Password color="black" />
            <br />
            <br />
            <Rotar>girando</Rotar>
        </Content>
    )
}

export default App
