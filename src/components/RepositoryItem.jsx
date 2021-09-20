import '../styles/repositoryItem.scss';

export function RepositoryItem(props){
  //console.log(props.repository);

  var stringCreate = (props.repository.created_at);
  var retornoCreate = stringCreate.split("-");
  
  var stringUpdate = (props.repository.updated_at);
  var retornoUpdate = stringUpdate.split("-");


  return(
    <>
      <a href={props.repository.html_url} target="_blank" className="link"  rel="noopener noreferrer">
        <div className={props.isDarkTheme ? "card-dark card" : "card-light card"}>
          <img src={props.repository.owner.avatar_url} className="avatar" />
          <div class="container">
            <h4>{props.repository.name}</h4> 
            <p>Linguagem: <b>{props.repository.language}</b></p>
            <p>Criado em: <b>{retornoCreate[1]}/{retornoCreate[0]}</b></p>
            <p>Atualizado em: <b>{retornoUpdate[1]}/{retornoUpdate[0]}</b></p>
            <p>Descrição: <b>{props.repository.description}</b></p>
          </div>
        </div>
      </a> 
    </>
  );
}