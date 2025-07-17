import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await axios.post('http://<your-ip>:5000/api/auth/login', { email, password });
      alert("Login successful");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput onChangeText={setEmail} style={{ borderBottomWidth: 1 }} />
      <Text>Password</Text>
      <TextInput secureTextEntry onChangeText={setPassword} style={{ borderBottomWidth: 1 }} />
      <Button title="Login" onPress={login} />
    </View>
  );
}