import { Container, MyFilms, Note } from "./styles";
import { HeaderHome } from "../../components/HeaderHome";
import { FiPlus } from 'react-icons/fi';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeNotes } from "../../Components/HomeNotes";
import { api } from '../../Services/api';


export const Home = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();
  const params = useParams();

  const handleShowFilms = (id) => {
    return navigate(`/moviepreview/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await api.get(`/notes?title=${search}`);

        setNotes(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert(
            "Não foi possível carregar os filmes. Tente recarregar a página."
          );
          console.log(error);
        }
      }
    }

    fetchNotes();
  }, [search]);


  return(
    <Container>
      <HeaderHome>
        <Input
            className="search only-in-desktop"
            placeholder="Pesquisar pelo título"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
      </HeaderHome>

      <main>

        <MyFilms>
          <div>
          <h1>Meus filmes</h1>
          <Link to = '/createmovie'>
          <Button 
            icon = {FiPlus}
            title = {'Adicionar filme'}
          />
          </Link>
          </div>
        </MyFilms>

        <Note>
          {console.log(notes, 'abc')}
          {notes.length == 0 ? (
              <h1>Nenhum filme encontrado</h1>
            ) : (
              notes.map(note => (
                <HomeNotes
                  data={note}
                  key={String(note.id)}
                  type={'button'}
                  onClick={() => handleShowFilms(note.id)}
                />
              ))
            )}
        </Note>

       </main>
    </Container>
  );
}