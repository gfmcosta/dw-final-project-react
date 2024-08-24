import React, { Component } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import "./SplashPage.css"


class SplashPage extends Component {
  state = {
    isLoggedIn: false,
    name: '',
  };

  componentDidMount(){
    const encodedPassword = encodeURIComponent("123Qwe#")
    console.log(encodedPassword);
    console.log(JSON.parse(sessionStorage.getItem('user')));
    if (JSON.parse(sessionStorage.getItem('user'))!= null){
      this.setState({isLoggedIn: true});

    }else{
      this.setState({isLoggedIn: false});
    }
  }
  render() {
    return (
      <div>
        <br/><br/><br/><br/>
        <div className='main-div'>
            <div className="img-container" onClick={() => window.location.href="/produtos?season=1"}>
                <img alt='Imagem Primavera' src='https://wallpapers.com/images/hd/costa-rica-1000-x-1333-picture-wrksj1hivjprcj6d.jpg' className='main-images' width="100%"></img>
                <h2 className='word'>PRIMAVERA</h2>
            </div>
            <div className="img-container" onClick={() => window.location.href="/produtos?season=2"}>
                <img alt='Imagem Verão' src='https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwZnVufGVufDB8fDB8fA%3D%3D&w=1000&q=80' className='main-images' width="100%"></img>
                <h2 className='word'>VERÃO</h2>
            </div>
            <div className="img-container" onClick={() => window.location.href="/produtos?season=3"}>
                <img alt='Imagem Outono' src='https://cdn.wallpapersafari.com/18/83/xk9Y7W.jpg' className='main-images' width="100%"></img>
                <h2 className='word'>OUTONO</h2>
            </div>
        </div>

      </div>
    );
  }
}

export default SplashPage;