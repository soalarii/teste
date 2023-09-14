import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'


export default function Nome (){
    const [texto,setTexto]=useState('')
    const [texto1,setTexto1]=useState('')
    return (
        <View style={{flex:1,borderColor:'red',borderWidth:2,padding:10}}>
            <Text style={styles.text}>
                Subject
            </Text>
            <TextInput style={{borderColor:'black',borderWidth:2,padding:1,paddingLeft:5}}
            onChangeText={(heading) => setTexto(heading)}
            value={texto}
            />
            <Text style={styles.text}>
                Attendess
            </Text>
            <TextInput style={{borderColor:'black',borderWidth:2,padding:1,paddingLeft:5}}
            onChangeText={(heading) => setTexto1(heading)}
            value={texto1}
            />
            <Text style={styles.text}>
                Start
            </Text>
            <TouchableOpacity style={{backgroundColor:'gray'}}>
                <Text>
                    12:30 PM
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold'
    }
})