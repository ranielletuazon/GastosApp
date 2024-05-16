import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  const handleCheck = () => {
    navigation.navigate("CheckList");
  }

  const handleEvent = () => {
    navigation.navigate("EventList");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Gastos</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Image style={styles.profileImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardButtonContainer}>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Money Saved:</Text>
          <Text>0.00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Salary:</Text>
          <Text>0.00</Text>
        </TouchableOpacity>
        <View style={styles.cardButtonContainer2}>
          <TouchableOpacity style={styles.cardButton2} onPress={handleEvent}>
            <View style={styles.calendar}>
              <Ionicons name='calendar-number-outline' size={55} color="#3A5311" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardButton2} onPress={handleCheck}>
            <Ionicons name='checkbox-outline' size={55} color="#3A5311" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image style={styles.footerImage}/>
          <Text>Logo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffe6',
  },
  header: {
    backgroundColor: '#fff',
    height: 80,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  profileImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  cardButtonContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  cardButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: "90%", 
    height: "30%", 
    marginBottom: 20, 
  },
  cardButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  cardButtonContainer2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%", 
  },
  cardButton2: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: "46%", 
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  footerButton: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#333', 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white', 
    borderWidth: 10,
    marginBottom:  40
  },
  footerImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain', 
  },
  calendar:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
