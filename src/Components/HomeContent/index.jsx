import { Container } from './styles';



export const HomeContent = ({title, ...rest}) => {
  return (
    <Container {...rest}>
      <h1>{title}</h1>
      
    </Container>
  )
}
