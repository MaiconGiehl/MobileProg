import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// import { Header } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>Contador</Text>
    </View>
  )
}

let styles = StyleSheet.create({
  headerBox: {
    height: 60,
    backgroundColor: '#4867D7'
  },
  headerText: {
    padding: 15,
    fontSize: 20,
    color: '#fff'
  },
  counterText: {
    fontSize: 30,
    color: '#234',
    textAlign: 'center',
    paddingTop: 150,
    paddingBottom: 40
  },
  button: {
    width: 200,
    margin: 'auto'  
  }
});

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Header />
      <Text style={styles.counterText}>{counter}</Text>
      <View style={styles.button}>
        <Button title="Clique aqui" onPress={(() => { setCounter(counter + 1) })}></Button>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Counter />
      <Text>{}</Text>
    </View>
  );
};

export default App;