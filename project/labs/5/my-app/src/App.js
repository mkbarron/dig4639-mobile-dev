import React from 'react';
import { View } from 'react-native';
//I keep reaching "Module not found: Can't resolve 'react-native'" error and can't figure this out.
import Cards from './components/Cards';

class App extends React.Component {
      render() {
        return (
          <View>
            <Cards/>
          </View> 
        )
    }
}
export default App;
  