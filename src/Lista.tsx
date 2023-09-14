import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function Lista() {
  const [variaveis, setVariaveis] = useState<number[]>([1, 2, 3, 4, 5]);

  useEffect(() => {
    // Defina um temporizador para atualizar as variáveis a cada segundo
    const timer = setInterval(() => {
      const novasVariaveis = [...variaveis]; // Crie uma cópia do array existente
      // Atualize as variáveis de alguma forma, por exemplo, adicionando 1 a cada uma delas
      novasVariaveis.forEach((valor, index) => {
        novasVariaveis[index] = valor + 1;
      });
      setVariaveis(novasVariaveis); // Atualize o estado com as novas variáveis
    }, 1000);

    // Limpe o temporizador ao desmontar o componente
    return () => clearInterval(timer);
  }, [variaveis]);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.titulo}>Lista de Variáveis:</Text>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
          {variaveis.map((valor, index) => (
            <View key={index}>
              <TouchableOpacity>
                <Text style={styles.list}>{valor}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 14,
    width: "100%",
    fontSize: 16,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  titulo: {
    top: "4%",
    fontSize: 22,
  },
});

export default Lista;
