import styled from 'styled-components'

const P = styled.p`
    font-size: 24px;
    color: red;
`
const Content = styled.div`
    padding: 20px 25px;
`
const Button = styled.button`
    background-color: ${(props) => (props.primary ? 'red' : 'white')};
    // background-color: ${(props) => (props.secondary ? 'yellow' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'red')};
    padding: 15px;
    border: solid 2px red;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
`
const BlockButton = styled(Button)`
    width: 100%;
    font-size: 24px;
`

function App() {
    return (
        <Content>
            <P>hola, soy un parrafo</P>
            <Button>Enviar</Button>
            <Button primary>Check</Button>
            <Button secondary>Check</Button>
            <br />
            <BlockButton> bloke</BlockButton>
            <BlockButton primary> bloke2</BlockButton>
            {/**modificamos el compòrtamiento de nuestro elemento 'BlockButton' 
            con la propiedad 'as'**/}
            <br />
            <BlockButton as="a" href="#">
                bloke2
            </BlockButton>
        </Content>
    )
}

export default App
