import React, {Component} from 'react';

class Nav extends Component {
  render(){
    let listTag = [];
    for(let i=0; i<this.props.list.length; i++){
      let li = this.props.list[i];
      listTag.push(
        <li key={li.id}>
          <a href={li.id} data-id={li.id} onClick={function(e){
            e.preventDefault();
            this.props.onClick(e.target.dataset.id);
          }.bind(this)}>{li.title}</a>
        </li>
      );
    }
    return (
      <nav>
          <ul>
            {listTag}
          </ul>
        </nav>
    );
  }
}

class Article extends Component {
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class Loading extends Component{
  render(){
    return <div>Loading...</div>
  }
}

class App extends Component {
  componentDidMount(){
    let newList = Object.assign({}, this.state.list, {isLoading: true});
    this.setState({list: newList});
    fetch('list.json')
      .then(function(result){
        return result.json();
      })
      .then(function(json){
        console.log(json);
        this.setState({list:{
          items: json,
          isLoading: false
        }});
      }.bind(this));
  }
  state = {
    article: {
      item: {title:'init', desc:'Hello, React & Ajax'},
      isLoading: false
    },
    list: {
      items: [],
      isLoading: false
    }
  }
  render(){
    let NavTag = null;
    if(this.state.list.isLoading){
      NavTag = <Loading></Loading>
    } else {
      NavTag = <Nav list={this.state.list.items} onClick={function(id){
        let newArticle = Object.assign({}, this.state.article, {isLoading: true});
        this.setState({article: newArticle});
        fetch(id + '.json')
          .then(function(result){
            return result.json();
          })
          .then(function(json){
            this.setState({
              article:{
                item:{
                  title: json.title,
                  desc: json.desc
                },
                isLoading: false
              }
            })
          }.bind(this));
      }.bind(this)}></Nav>
    }
    let ArticleTag = null;
    if(this.state.article.isLoading){
      ArticleTag = <Loading></Loading>
    } else {
      ArticleTag = <Article title={this.state.article.item.title} desc={this.state.article.item.desc}></Article>
    }
    return (
      <div className="App">
          <h1>WEB</h1>
          {NavTag}
          {ArticleTag}
      </div>
    );
  }
}

export default App;