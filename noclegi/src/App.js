import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu'
import Hotels from './components/Hotels/Hotels';
import React, { Component } from 'react';
import LoadingIcon from './components/UI/Loadingicon/Loadingicon';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Changetheme from './components/UI/Changetheme/Changetheme'
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';

class App extends Component {

    hotels = [
      {
        id: 1,
        name: 'Pod akacjami',
        city: 'Warszawa',
        rating: '4.58',
        ratings: '340',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis erat dolor. Ut eu efficitur mi. Vivamus vehicula tincidunt tellus, at feugiat erat rutrum in. Sed sit amet bibendum odio, id condimentum est. Maecenas ornare eleifend nisi et tincidunt.',
        image: ''
    },
    {
        id: 2,
        name: 'Dębowy',
        city: 'Wrocław',
        rating: '4.95',
        ratings: '600',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis erat dolor. Ut eu efficitur mi. Vivamus vehicula tincidunt tellus, at feugiat erat rutrum in. Sed sit amet bibendum odio, id condimentum est. Maecenas ornare eleifend nisi et tincidunt.',
        image: ''
    }
  ];
  state = {
    hotels: [],
    loading: true,
    theme: 'primary',
    isAuthenticated: false,
   };

   componentDidMount(){
     setTimeout(() => {
       this.setState({hotels: this.hotels, loading: false});
     }, 1000);
   }

   searchHandler(term){
     console.log(term)
     const hotels = [...this.hotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()));
     this.setState({ hotels });
   }

   themeChanger = () => {
     const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary'
     this.setState({ theme: newTheme})
   }


  render(){

    const header = (
      <Header>
      <Searchbar 
      onSearch={term => this.searchHandler(term)}
      />
      </Header>)

    const menu = (
      <Menu/>)

    const content = (
      this.state.loading 
      ? <LoadingIcon /> 
      : <Hotels hotels={this.state.hotels}/>)

    const footer = (
      <Footer/>)

    return (
      <AuthContext.Provider value={{ 
        isAuthenticated: this.state.isAuthenticated,
        login: () => this.setState( {isAuthenticated: true} ),
        logout: () => this.setState( {isAuthenticated: false} ),
        }}>
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        changeTheme: this.themeChanger
        }}>
          <Layout
            header={header}
            menu={menu}
            content={content}
            footer={footer}
          />
      </ThemeContext.Provider>
      </AuthContext.Provider>
    );
  }
}

export default App;