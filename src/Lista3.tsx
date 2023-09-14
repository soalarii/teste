import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Animated,
  StyleSheet,
} from "react-native";

const Lista3 = () => {
  const [contador, setContador] = useState(0);
  const [historico, setHistorico] = useState([]);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Função para atualizar o contador e adicionar um item ao histórico automaticamente a cada 3 segundos
    const interval = setInterval(() => {
      setContador(contador + 1);
      setHistorico([
        ...historico,
        `Contador foi incrementado para ${contador + 1}`,
      ]);
    }, 2000);

    // Animação para suavizar a mudança no contador
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    return () => clearInterval(interval);
  }, [contador, historico]);

  return (
    <View style={styles.container}>
      <Animated.Text style={{ ...styles.text, opacity: fadeAnim }}>
        Contador: {contador}
      </Animated.Text>
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />

      <Text style={styles.text}>Histórico:</Text>
      <FlatList
        data={historico}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginVertical: 10,
  },
  historyItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default Lista3;
