import React, { useContext } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { AuthContext } from './AuthProvider';

function UserOnly() {
  const { user, logout } = useContext(AuthContext);
  console.log("User Details", user);
  if (!user) {
    return <Text>Please log in.</Text>;
  }
  else if(user.role === "user" && user.username === "user" && user.email === "user@example.com")
  return (
    <View style={styles.container}>
     <View style={styles.text}>
      <Text>Welcome, {user.username}!</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Logout" onPress={logout} /></View>
    </View>
  ); else if(user.role == "admin") return (<Text>hello Admin</Text>);
  else return (<Text>Hello user that is is name is not user</Text>);
} 

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text:{
    fontWeight:'bold',
    fontSize:20
  }
});



export default UserOnly;
