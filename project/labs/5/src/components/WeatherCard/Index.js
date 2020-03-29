import React from "react";
import {View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    backgroundColor: "#c7e89d",
    alignItems:"center",
    textAlign: "center",
    width: "50%",
    padding:"2em",
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 3,
    marginLeft: "auto",
    marginRight: "auto"
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold"
  }

})

class WeatherCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      periods: []
    };

  }

  componentDidMount() {

    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(res => res.json())
    .then((result) => {
      let periods = result.properties.periods;
     
      this.setState({
        periods: periods
      });
      
    })
    .catch((error) => {console.log(error)} );

  }

  render() {
    return(
      <View>
        {
            this.state.periods.map((value, index) => {
                return <View style={styles.card} key={index}>
                    <Text style={styles.heading}>{value.name}</Text>
                    <Text style={styles.heading}>{value.temperature} {value.temperatureUnit}</Text>
                    <Text>{value.detailedForecast}</Text>
                    </View>;
            })
        
        }
      </View>
    );

}

export default WeatherCard;