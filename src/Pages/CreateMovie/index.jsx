import { Header } from '../../Components/Header';
import { Container, Form } from './styles';
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../Components/Input';
import { Textarea } from '../../Components/TextArea';
import { NoteItem } from '../../Components/NoteItem';
import { Section } from '../../Components/Section';
import { Button } from '../../Components/Button'
import { Link } from 'react-router-dom';

export const CreateMovie = () => {
  return (
    <Container>
      <Header/>
      
      <main>
        <Form>
          <header>
            <Link to = '/'><FiArrowLeft/> Voltar</Link>
            <h1>Novo Filme</h1>
          </header>

          <div className='Inputs'>
            <Input 
              placeholder = 'Títutlo'
              type = 'text'
            />

            <Input 
              placeholder = 'Sua nota (0 a 5)'
              type = 'number'
              min = '0'
              max = '5'
            />

          </div>

          <Textarea placeholder = 'Observações'/>
          
          <Section title = {'Marcadores'}
            style = {{color: '#948F99', fontSize: '2rem'}}
          >
            <div className='tags'>
            <NoteItem 
              value = {'Animação'}
            />

            <NoteItem 
              value = {'Aventura'}
            />  

            <NoteItem 
              value = {'Comédia'} isNew
            />

            <NoteItem 
              value = {'Drama'} isNew
            />  

            <NoteItem 
              value = {'Terror'} isNew
            />  

            </div>
          </Section>

          <div className='buttons'>
            <Button title = {'Excluir nota'}/>
            <Button title = {'Adicionar nota'}/>
          </div>
        </Form>
      </main>


    </Container>
  )
}
