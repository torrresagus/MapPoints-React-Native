import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity} from 'react-native';
import { Map, Modal, Panel, Input, List } from './components/Index';
import { useState } from 'react';
import { Tooltip } from 'react-native-elements';
import { Icon } from 'react-native-elements';

export default function App() {
  const [points, setPoints] = useState([]);
  const [pointTemp, setPointTemp] = useState({});
  const [name, setName] = useState(""); 
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setPointsFilter] = useState(true);
  const [visibilityFilter, setVisibilityFilter] = useState('new_point');
  const [pointsVisible, setPointsVisible] = useState(true);

  const togglePointsFilter = () => {
    setPointsFilter(!pointsFilter);
    setPointsVisible(!pointsVisible);
  }


  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_point');
    setPointTemp(nativeEvent.coordinate);
    setVisibility(true);
  }

  const handleList = () => {
    setVisibilityFilter('all_points');
    setVisibility(true);
  }
  const handleChangeText = text => {
    setName(text);
  }

  const handleSavePoint = () => {
    const newPoint = { coordinate: pointTemp, name: name };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setPointTemp("");
  }
  
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} points={points} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleList} textLeft="List" togglePointsFilter={togglePointsFilter} pointsVisible={pointsFilter}/>
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_point' 
            ? 
            <View style={styles.form}>
            <Input title='Name' placeholder="Name of the Place" onChangeText={handleChangeText} />
            <TouchableOpacity style={styles.button} onPress={handleSavePoint}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            </View>
            : <List points={points} closeModal={() => setVisibility(false)}/>
          
        }

      </Modal> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form: {
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    minWidth: Dimensions.get('window').width / 2 - 50,
  },
  buttonText: {
    color: 'white',
  },
  tooltip: {
    position: 'relative',
    top: 50,
    left: 10,
    zIndex: 1,
  } 
});
