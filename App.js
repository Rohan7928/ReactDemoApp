import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalText(enterGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,
    { text: enterGoalText, id: Math.random().toString() }])
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    console.log('Delete')
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button title='Add New Goal' color='#a065ec' onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalText} visible={modalIsVisible} onCancel={endAddGoalHandler} />
        <View style={styles.listContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} />;
          }}
            keyExtractor={(item, index) => { return item.id }}
            alwaysBounceVertical={false}>
          </FlatList>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  listContainer: {
    flex: 6
  },
  goalItem: {
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    margin: 8,
    color: 'white'
  }

});
