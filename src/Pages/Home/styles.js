import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  'header'
  'content';

> main {
  display: grid;
  grid-area: content;
  overflow-y: scroll;
}`;

 export const MyFilms = styled.span` 
  margin: 0 auto;
  

  > div {
    margin-top: 5rem;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 76.6rem;

  }

  h1 {
    color: ${({ theme }) => theme.COLORS.C_FONT_1};
    font-size: 3.2rem;
    line-height: 4.2rem;
    font-weight: 400;
    white-space: nowrap;
  }

  button {
    width: 20.7rem;
    display: flex;
    align-items: center;
    gap: .8rem;
  }
 `

export const Title = styled.div`
 display: flex;
 flex-direction: column;

  .rating {
   display: flex;
   flex-direction: row;
 }
`

 export const Content = styled.div`
  width: 118rem;
  height: 22.2rem;
  background-color: ${({ theme }) => theme.COLORS.BG_MOVIENOTE};
  margin: 0 auto;
  border-radius: 2rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.C_FONT_1};
    margin-bottom: .8rem;
  }

  .description {
    color: ${({ theme }) => theme.COLORS.C_FONT_5};
    margin-top: 1.5rem;
    font-size: 1.6rem;
    line-height: 1.8rem;
    font-weight: 400;
    width: 110rem;
    height: 5.2rem;

    text-overflow: ellipsis;
    overflow-y: scroll;

  }

  .tags {
    display: flex;
    margin-top: 1.5rem;
    gap: .8rem;
 
  }
 `
