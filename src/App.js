import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Text, Button, TextInput} from 'react-native';
import {LocalNotification} from './LocalPushController';

const App = (props) => {
  const [form, setForm] = useState({
    title: '',
    subText: '',
    message: '',
    bigText: '',
  });

  const handleChange = (value, type) => {
    setForm({...form, [type]: value});
  };

  const handleCheck = () => {
    // setForm({ ...form });
    console.log(form);
  };

  return (
    <View style={styles.container}>
      <Text>Notification Firebase</Text>
      <TextInput
        placeholder="title"
        value={form.title}
        onChangeText={value => handleChange(value, 'title')}
      />
      <TextInput
        placeholder="subText"
        value={form.subText}
        onChangeText={value => handleChange(value, 'subText')}
      />
      <TextInput
        placeholder="message"
        value={form.message}
        onChangeText={value => handleChange(value, 'message')}
      />
      {/* <TextInput
        placeholder="bigText"
        value={form.bigText}
        onChangeText={value => handleChange(value, 'bigText')}
      /> */}
      <Button
        title="Submit"
        onPress={() =>
          LocalNotification(form.title, form.subText, form.message, form.message)
          // handleCheck()
        }
        // onPress={() => localNotificationService.cancleAllLocalNotifications()}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App