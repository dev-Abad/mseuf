import React from 'react'; 
import { View, Text, StyleSheet, ScrollView } from 'react-native'; 
const MSEUF = () => { 
return ( 
    <ScrollView style={styles.container}> 

    <View style={{backgroundColor: '#fff', height: 250, width: 300, alignItems: 'center',  paddingTop: 10, borderRadius: 10, marginBottom: 10 , marginLeft: 10}}>
        <Text style={styles.sectionTitle}>OUR VISION</Text> 
        <Text style={styles.sectionText}> 
            In 2030, Manuel S. Enverga University Foundation is a globally competitive university with high concentrations of talent, an excellent teaching environment, rigorous program quality, sufficient resources, and a culture of collaboration. 
        </Text> 
    </View>

    <View style={{backgroundColor: '#fff', height: 250, width: 300, alignItems: 'center',  paddingTop: 10, borderRadius: 10, marginBottom: 10 , marginLeft: 10}}>
        <Text style={styles.sectionTitle}>OUR MISSION</Text> 
        <Text style={styles.sectionText}> 
            The University is a private non-stock non-profit non-sectarian educational foundation with a three-fold function instruction, research, and community service offering responsive and alternative programs supportive of national development and standards of global excellence. 
        </Text> 
    </View>

    <View style={{backgroundColor: '#fff', height: 180, width: 300, alignItems: 'center',  paddingTop: 10, borderRadius: 10, marginBottom: 10 , marginLeft: 10}}>
        <Text style={styles.sectionTitle}>OUR GOAL</Text> 
        <Text style={styles.sectionText}> 
            MSEUF shall produce graduates who have research-based knowledge, leadership, and management skills, and professionalism. 
        </Text> 
    </View>

    </ScrollView> 
    ); 
}; 
const styles = StyleSheet.create({ 
container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#EEE2DE', 
    },

    sectionTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    color: '#8C0909', 
    }, 

    sectionText: { 
    fontSize: 15, 
    marginBottom: 20, 
    color: 'black', 
    lineHeight: 24, 
    textAlign: 'center',
    fontWeight:'700'
    }, 
}); 
export default MSEUF;
