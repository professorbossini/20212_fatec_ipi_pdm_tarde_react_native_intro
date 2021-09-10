//hooks do React. Eles existem a partir da versão 16.8 do React.
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component{
  constructor (props){
    super (props)
    this.state = {
      texto: 'Texto Inicial',
      contador: 0
    }
  }
  render(){
    return(
      <View
        style={styles.container}>
        <Text>{this.state.contador}</Text>
        <Button 
          title="Incrementar"
          onPress={() => this.setState({
            contador: this.state.contador + 1
          })}
        />
      </View>
    )
  }
}


// export default function App() {

//   const [texto, setTexto] = useState('Texto inicial')
//   return (
//     <View style={styles.container}>
//       <Text>{texto}</Text>
//       <Button 
//         title="Alterar texto"
//         onPress={() => setTexto('Um novo texto aqui')}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
