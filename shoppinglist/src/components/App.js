  import React from 'react';

  import Form from './Form';
  import ItemList from './ItemList';


 
  export default class App extends React.Component {

    state = {articles : []};
    addArticle = (article)=>{
        let oldArticles = this.state.articles;
        article.id = this.state.articles.length + 1;
        let newArticles = [...oldArticles, article];
        this.setState({ articles: newArticles });
        
    }
      render(){
          return(
              <div>
                <h3>Liste de courses</h3>
                <Form formTitle="Ajout d'article" addArticle={this.addArticle}/>
                <ItemList articles={this.state.article} />
              </div>    
          );
      }
  } 