import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Apple',
      color: 'Merah',
      img: 'apel.jpg',
    };
  }

  clicked(menu) {

    // untuk memperbarui state sesuai dengan menu yg dipilih
    this.setState({
      name: menu.name,
      color: menu.color,
      img: menu.img,
    });
  }
  // menusaya() {
  //   var gambar;
  //   if(this.state.color.toLowerCase() === 'merah'){
  //     gambar = "apel";
  //   }else if(this.state.color.toLowerCase() === 'kuning'){
  //     gambar = "nanas";
  //   }else if(this.state.color.toLowerCase() === 'hijau'){
  //     gambar = "alpukat";
  //   }else if(this.state.color.toLowerCase() === 'biru'){
  //     gambar = "berry";
  //   }

  //   return <img src={gambar+".jpg"} width="200"></img>
  // }

  render() {
    return (
      <div id="app">
          {/* map akan loop sebanyak menu yg didefinisikan */}
          {/* kemudian mengembalikan elemen <a/> */}
          <nav className="nav">{ this.props.items.map((menu, index) => {
            var style = 'menu';

            if (this.state.color === menu.color) {
              style = `${style} is-active`;
            }

            return <a
                    className={style+" "+menu.color}

                    // bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked'
                    onClick={this.clicked.bind(this, menu)}
                    key={index}
                  >
                    {menu.name}
                  </a>;
          }) }
          </nav>

          <div className="info">
            ini adalah <span className={"selected "+this.state.color}>{this.state.name}</span><br/><br/>
            
            <img src={this.state.img} width="200"></img>
            {/* {this.menusaya()} */}
          </div>
      </div>
    );
  }
}

export default App;
