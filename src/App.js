import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Apple',
      color: 'merah',
      img: 'apel.jpg',
      angka1: 0,
      angka2: 0,
      operation: 'plus',
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
  info(name){
    if(name == 'Calculator'){
      //display calc
      return (
        <div>
          <span className={"selected "+this.state.color}>{this.state.name}  </span><br/><br/>
          <input type="number" name="angka1" placeholder="angka 1"  value={this.state.angka1} onChange={this.changeHandler.bind(this)}/>
          <select name="operation" onChange={this.changeHandler.bind(this)}>
            <option value="plus">+</option>
            <option value="minus">-</option>
            <option value="pow">x</option>
            <option value="div">:</option>
          </select>
          <input type="number" name="angka2" placeholder="angka 2"  value={this.state.angka2} onChange={this.changeHandler.bind(this)}/>=
          <span> {this.hitung()}</span>
        </div>
      );
    }else{
      //display default
      return (
        <div>
          ini adalah <span className={"selected "+this.state.color}>{this.state.name}</span><br/><br/>
                  
          <img src={this.state.img} width="200"></img>
        </div>
      );
    }
  }
  changeHandler(event) {
    
    // this.setState({
    //   angka1: event.target.value
    // });
    this.setState({
      [event.target.name]: event.target.value 
    });
  }
  hitung(){
    switch(this.state.operation){
      case 'plus': return parseInt(this.state.angka1) + parseInt(this.state.angka2);
      case 'minus': return parseInt(this.state.angka1) - parseInt(this.state.angka2)
      case 'pow': return parseInt(this.state.angka1) * parseInt(this.state.angka2)
      case 'div': return parseInt(this.state.angka1) / parseInt(this.state.angka2)
    }
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
            {this.info(this.state.name)}
          </div>
      </div>
    );
  }
}

export default App;
