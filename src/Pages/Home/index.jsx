import { Container, Content, MyFilms, Title } from "./styles";
import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import {StarEmpty} from '../../Components/StarEmpty';
import {StarColor} from '../../Components/StarColor';
import { FiPlus } from 'react-icons/fi';
import { Button } from '../../Components/Button';
import { Link } from "react-router-dom";


export function Home() {
  const data = {
    rating: 4
  }

  return(
    <Container>
      <Header />

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

        <Content> 
        <Title>
          <h1>Interstellar</h1>
          <div className="rating">
            { data.rating && data.rating === 0 ? <> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 1 ? <> <StarColor/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 2 ? <> <StarColor/> <StarColor/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 3 ? <> <StarColor/> <StarColor/> <StarColor/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 4 ? <> <StarColor/> <StarColor/> <StarColor/> <StarColor/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 5 ? <> <StarColor/> <StarColor/> <StarColor/> <StarColor/> <StarColor/> </> : ''}  
          </div>
        </Title>
        <div className="description">
          <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência 
            desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que 
            os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca 
            foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. 
            As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro 
            Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar
            a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
            para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. 
              <br/><br/>
            Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, 
            além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação
            gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e 
            descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia 
            tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
          </p>
        </div>

        <div className="tags">
          <Tag 
            title = {'Ficção Cientifica'}
          />

          <Tag 
            title = {'Drama'}
          />

          <Tag 
            title = {'Família'}
          />
        </div>
        </Content>

        <Content> 
        <Title>
          <h1>Interstellar</h1>
          <div className="rating">
            { data.rating && data.rating === 0 ? <> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 1 ? <> <StarColor/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 2 ? <> <StarColor/> <StarColor/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 3 ? <> <StarColor/> <StarColor/> <StarColor/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 4 ? <> <StarColor/> <StarColor/> <StarColor/> <StarColor/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 5 ? <> <StarColor/> <StarColor/> <StarColor/> <StarColor/> <StarColor/> </> : ''}  
          </div>
        </Title>
        <div className="description">
          <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência 
            desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que 
            os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca 
            foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. 
            As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro 
            Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar
            a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
            para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. 
              <br/><br/>
            Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, 
            além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação
            gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e 
            descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia 
            tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
          </p>
        </div>

        <div className="tags">
          <Tag 
            title = {'Ficção Cientifica'}
          />

          <Tag 
            title = {'Drama'}
          />

          <Tag 
            title = {'Família'}
          />
        </div>
        </Content>

        <Content> 
        <Title>
          <h1>Interstellar</h1>
          <div className="rating">
            { data.rating && data.rating === 0 ? <> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 1 ? <> <StarColor/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 2 ? <> <StarColor/> <StarColor/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 3 ? <> <StarColor/> <StarColor/> <StarColor/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 4 ? <> <StarColor/> <StarColor/> <StarColor/> <StarColor/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 5 ? <> <StarColor/> <StarColor/> <StarColor/> <StarColor/> <StarColor/> </> : ''}  
          </div>
        </Title>
        <div className="description">
          <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência 
            desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que 
            os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca 
            foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. 
            As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro 
            Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar
            a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
            para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. 
              <br/><br/>
            Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, 
            além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação
            gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e 
            descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia 
            tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
          </p>
        </div>

        <div className="tags">
          <Tag 
            title = {'Ficção Cientifica'}
          />

          <Tag 
            title = {'Drama'}
          />

          <Tag 
            title = {'Família'}
          />
        </div>
        </Content>

        <Content> 
        <Title>
          <h1>Interstellar</h1>
          <div className="rating">
            { data.rating && data.rating === 0 ? <> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 1 ? <> <StarColor/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 2 ? <> <StarColor/> <StarColor/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 3 ? <> <StarColor/> <StarColor/> <StarColor/> <StarEmpty/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 4 ? <> <StarColor/> <StarColor/> <StarColor/> <StarColor/> <StarEmpty/> </> : ''}
            { data.rating && data.rating === 5 ? <> <StarColor/> <StarColor/> <StarColor/> <StarColor/> <StarColor/> </> : ''}  
          </div>
        </Title>
        <div className="description">
          <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência 
            desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que 
            os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca 
            foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. 
            As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro 
            Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar
            a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
            para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. 
              <br/><br/>
            Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, 
            além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação
            gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e 
            descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia 
            tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
          </p>
        </div>

        <div className="tags">
          <Tag 
            title = {'Ficção Cientifica'}
          />

          <Tag 
            title = {'Drama'}
          />

          <Tag 
            title = {'Família'}
          />
        </div>
        </Content>

       </main>
    </Container>
  );
}