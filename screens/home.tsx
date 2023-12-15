import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '../types';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'home'>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/background1.jpg')} resizeMode="cover" style={styles.Imagebackground}>
        <Image source={require('../assets/mseuf.png')} style={styles.logo} />
        <Text style={styles.title}>Manuel S. Enverga University Foundation</Text>
        
        <CustomButton onPress={() => navigation.navigate('mseuf')} text="MSEUF Vision, Mission and Goal" />
        <CustomButton onPress={() => navigation.navigate('mseufstory')} text="The MSEUF Story" />
        </ImageBackground>
    </View>
  );
};

const CustomButton = ({ onPress, text }: { onPress: () => void; text: string }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    width: 250,
    height: 250,
    marginTop: 200,
    marginLeft: 60
  },

  title: {
    fontSize: 33,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
    textAlign: 'center'
  },

  button: {
    backgroundColor: '#8C0909',
    padding: 25,
    borderRadius: 18,
    marginBottom: 20,
    width: 270,
    marginTop: 10,
    marginLeft: 50,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Imagebackground: {
    width: "100%",
    height: "150%",
  }
  
});

export default Home;
