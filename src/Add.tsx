import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { firebase } from "../firebaseConfig";

const Add: React.FC = () => {
  const todoRef = firebase.firestore().collection("newData");
  const [palavra, setPalavra] = useState<string>("");

  const [botaoVisivel, setBotaoVisivel] = useState(true);

  // Adicionar um novo campo
  const addCampo = () => {
    // Verificar se há um novo campo
    if (palavra && palavra.length > 0) {
      // Obter o carimbo de data/hora do servidor
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: palavra,
        createAt: timestamp,
      };
      todoRef
        .add(data)
        .then(() => {
          // Limpar o estado do campo
          setPalavra("");
          // Ocultar o teclado
          Keyboard.dismiss();
        })
        .catch((error) => {
          // Mostrar erro, se houver
          alert(error);
        });
    }
  };

  const disable = () => {
    setBotaoVisivel(false); // Isso fará o botão desaparecer
  };
  const able = () => {
    setBotaoVisivel(true);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.forms}>
        <TextInput
          style={styles.input}
          placeholder="Escreva algo aqui..."
          placeholderTextColor="#aaaaaa"
          onChangeText={(heading) => setPalavra(heading)}
          value={palavra}
          multiline={true}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        {botaoVisivel && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addCampo();
              disable();
            }}
          >
            <Text style={styles.escreveu}>Add</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={styles.button2} onPress={able}>
        <Text style={styles.escreveu}>Mostra botao</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  forms: {
    flexDirection: "row",
    height: 80,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  button: {
    height: 48,
    borderRadius: 5,
    backgroundColor: "#788eec",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    height: 60,
    borderRadius: 5,
    backgroundColor: "#788eec",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  escreveu: {
    color: "white",
    fontSize: 20,
  },
});

export default Add;
