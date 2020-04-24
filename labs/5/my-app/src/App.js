import React from 'react';
import './App.css';
import CardList from './Components/WeatherCard/index.js';

class App extends React.Component {
      render() {
        return (
          <View>
            <WeatherCard/>
          </View> 
        )
    }
}
export default App;
  