import { Container, Profile } from './styles';
import { Input } from '../Input';
import { useAuth } from '../../hooks/auth';
import { api } from '../../Services/api';


export const Header = () => {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
     
      <h1>RocketMovies</h1>
      <Input placeholder = 'Pesquise pelo título'/>
      <Profile to = '/profile'>
        <div>
        <p>{user.name}</p>

        <button onClick = {signOut}>Sair</button>
        </div>

        <img src={avatarUrl} alt={user.name} />
      </Profile>
      

    </Container>
  )
}
