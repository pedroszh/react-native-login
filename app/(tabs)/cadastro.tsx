import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router'

export default function CadastroScreen() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const router = useRouter();

    const handleCadastro = () => {

      if (!nome || !sobrenome || !email || !senha) {
        setErro('Preencha todos os campos!');
          return;
      }

      setErro('');

        alert(`Nome: ${nome}\nSobrenome: ${sobrenome}\nEmail: ${email}\nSenha: ${senha}`);
        router.push('/');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>

            <TextInput
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />

            <TextInput
                placeholder='Sobrenome'
                value={sobrenome}
                onChangeText={setSobrenome}
                style={styles.input}
            />

            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <TextInput
                placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
                style={styles.input}
                secureTextEntry
            />
            {erro !== '' && (
              <Text style={styles.erroTexto}>{erro}</Text>
            )}


            <Pressable style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>


            <Pressable onPress={() => router.push('/')}>
                <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>

            </Pressable>

        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 14,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: '#007AFF',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  erroTexto: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  }
});