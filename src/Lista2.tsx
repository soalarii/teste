import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface SeuComponenteProps {}

const Lista2 = () => {
  const [textos, setTextos] = useState<string[]>([]);
  const [variavel, setVariavel] = useState<string>("");

  // Função para adicionar um novo texto à lista
  const adicionarTexto = () => {
    if (variavel.trim() !== "") {
      setTextos([...textos, variavel]);
      setVariavel(""); // Limpar a variável após adicionar
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingTop: "6%",
        backgroundColor: "white",
      }}
    >
      <View>
        {/* Input para digitar a variável */}
        <TextInput
          placeholder="Digite um texto"
          value={variavel}
          onChangeText={setVariavel}
          style={{ borderWidth: 1, margin: 10, padding: 5 }}
        />
        {/* Botão para adicionar o texto */}
        <Button title="Adicionar" onPress={adicionarTexto} />

        {/* FlatList para mostrar a lista de textos */}
        <ScrollView>
          {textos.map((item, index) => (
            <View key={index}>
              <TouchableOpacity>
                <Text style={styles.list}>{item}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 14,
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default Lista2;
