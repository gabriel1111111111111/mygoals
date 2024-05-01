import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [entredGoalText, setEnteredGoalText] = useState('')
  const [goals, setGoals] = useState([])

  function handleInputGoal(enteredText){
  console.log(enteredText)
  setEnteredGoalText(enteredText)
}

function handleAddGoal(){
  console.log(enteredGoalText)
  setGoals(() => [...goals,{text: enteredGoalText, key: math.random().toString()}])
}
  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}>
      <TextInput
      style={styles.TextInput}
      placeholder='your Goal!'
      onChangeText={handleInputGoal}
      />
      <Button
      title='add Goal'
      color={'#A3FFD6'}
      onPress={handleAddGoal}
      />
     </View>
     <View style={styles.goalContainer}>
      <FlatList
      data={goals}
      redenderItem={ (itemData) =>{
        <View style ={styles.goalsItem}>
          <Text style={styles.goalText}>
          </Text> 
          </View>
      }}
      >

      </FlatList>

     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF',

  },
  bthGoal:{
    borderRadius: 20,
    backgroundColor: '#ccccc',


  },
  TextInput:{
    borderWidth: 1,
    borderColor:'#ccccc',
    width:'80%',
    padding: 8,
    borderRadius: 5,

  },
  goalContainer:{
    flex: 5,

  },
  goalsItem:{
    margin: 8,
    padding: 8,
    borderRadius:6,
    backgroundColor: '#8576FF',
    color: 'white',
  },
  goalText: {
    color: 'white'
  }
});
