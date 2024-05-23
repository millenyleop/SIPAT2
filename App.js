import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

function HomeScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/9a/fe/fd/9afefd810dc12852943e59d1f64d900f.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>SIPAT</Text>
        <View style={styles.content}>
          <Text style={styles.aboutTitle}>Semana Interna de Prevenção de Acidentes do Trabalho</Text>
          <Text style={styles.aboutText}>A SIPAT, ou Semana Interna de Prevenção de Acidentes do Trabalho, é um evento de grande importância dentro das empresas e organizações. Criada com o objetivo de promover a conscientização e a prevenção de acidentes laborais, bem como a promoção da saúde e segurança dos trabalhadores, a SIPAT desempenha um papel fundamental na cultura de segurança no ambiente de trabalho.
Durante a SIPAT, são realizadas diversas atividades, palestras, workshops, dinâmicas e treinamentos voltados para a segurança, saúde e bem-estar dos colaboradores. Essas atividades geralmente abordam temas como prevenção de acidentes, uso correto de equipamentos de proteção individual (EPIs), ergonomia, saúde mental, qualidade de vida, prevenção de doenças ocupacionais, entre outros.
Além de ser uma oportunidade para disseminar conhecimento e boas práticas relacionadas à segurança no trabalho, a SIPAT também promove a integração entre os colaboradores e a empresa. A participação ativa dos funcionários nas atividades da SIPAT contribui para fortalecer o senso de responsabilidade coletiva pela segurança e saúde no ambiente de trabalho.
A legislação trabalhista brasileira estabelece a obrigatoriedade da realização da SIPAT em empresas com número mínimo de funcionários, visando garantir a proteção e a integridade física dos trabalhadores. Dessa forma, a SIPAT não apenas cumpre uma exigência legal, mas também se torna uma oportunidade valiosa para promover uma cultura de segurança e prevenção de acidentes que beneficia a todos os envolvidos.</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    justifyContent: 'flex-start', 
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  aboutText: {
    fontSize: 20,
    color: '#333',
    marginTop: 10,
  },
});

export default HomeScreen;
