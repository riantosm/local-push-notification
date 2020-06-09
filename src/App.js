import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LocalNotification} from './services/LocalPushController';
import {colors as c, fonts as f} from './styles';

const {width, height} = Dimensions.get('window');

const App = () => {
  const [wait, setWait] = useState(false);
  const [form, setForm] = useState({title: '', subText: '', message: ''});

  const handleChange = (value, type) => {
    setForm({...form, [type]: value});
  };

  const handleSubmit = () => {
    form.title.length === 0 ||
    form.subText.length === 0 ||
    form.message.length === 0
      ? alert('Tidak boleh kosong')
      : (setWait(true),
        setTimeout(() => {
          sendNotif();
        }, 1000));
  };

  const sendNotif = () => {
    LocalNotification(form.title, form.subText, form.message, form.message);
    setWait(false);
    alert('Oke');
    setForm({title: '', subText: '', message: ''});
  };

  return (
    <ScrollView style={s.scrollView}>
      <View style={s.container}>
        <Text style={s.title}>Local</Text>
        <Text style={s.text}>Notifikasi</Text>
        <TextInput
          placeholder="Judul, contoh: 'Kepada seluruh pengguna'"
          value={form.title}
          onChangeText={value => handleChange(value, 'title')}
          style={s.textInput}
        />
        <TextInput
          placeholder="Sub judul, contoh: 'Pemberitahuan'"
          value={form.subText}
          onChangeText={value => handleChange(value, 'subText')}
          style={s.textInput}
        />
        <TextInput
          placeholder="Pesan'"
          value={form.message}
          onChangeText={value => handleChange(value, 'message')}
          style={s.textInput}
        />

        {wait ? (
          <ActivityIndicator style={s.loading} />
        ) : (
          <TouchableOpacity onPress={() => handleSubmit()} style={s.btn}>
            <Text style={s.btnText}>Kirim</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/riantosm')}
        style={s.link}>
        <Text style={s.linkText}>https://github.com/riantosm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height - 50,
  },
  title: {
    fontSize: 64,
    marginBottom: 0,
    textAlign: 'center',
    paddingHorizontal: 50,
    color: c.primary,
    fontFamily: f.Aquawax,
  },
  text: {fontFamily: f.GoogleSans_Medi, color: c.secondary},
  textInput: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#cccccc',
    width: '90%',
    marginTop: 30,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  btn: {
    marginTop: 20,
    backgroundColor: c.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {color: '#f2f2f2', fontFamily: f.GoogleSans_Medi},
  loading: {
    marginTop: 20,
  },
  link: {position: 'absolute', bottom: 0, width: '100%'},
  linkText: {
    textAlign: 'center',
    fontFamily: f.GoogleSans_Bold,
    color: c.primary,
    fontSize: 10,
  },
});

export default App;
