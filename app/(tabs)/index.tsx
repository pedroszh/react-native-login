import React, {useState} from "react";
import { View, Text, TextInput, Pressable, StyleSheet} from "react-native";
import { useRouter } from "expo-router";


export default function LoginScreen(){
  const router = useRouter();
  const [Email, setEmail] = useState(''); 
  const [Senha, setSenha] = useState(''); 
  const [Lembrar, setLembrar] = useState(false);
  const [erro, setErro] = useState('');
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput 
      placeholder="Email"
      value = {Email}
      onChangeText={setEmail}
      style={styles.input}
      />

      
      <TextInput 
      placeholder="Senha"
      value= {Senha}
      onChangeText={setSenha}
      secureTextEntry
      style={styles.input}/>

    
        {erro !== '' && (
    <Text style={styles.erroTexto}>{erro}</Text>
  )}

  <Pressable
  onPress={() => setLembrar (!Lembrar)}>
    <Text>{Lembrar ? '✓': '☐'} Lembrar senha</Text>


  </Pressable>
  
  <Pressable style={styles.button} onPress={()=> {
    if (!Email || !Senha){
      setErro('Preencha todos os campos')
      return;
    }
    setErro('');

    alert(`Email: ${Email}\nSenha: ${Senha}\nLembrar: ${Lembrar ? 'Sim' : 'Não'}`);
  }}>


    <Text style={styles.buttonText}>Entrar</Text>
  </Pressable>

  <Pressable onPress={() => router.push('/cadastro')}>
    <Text style={styles.linkText}>Não tenho conta? Cadastre-se</Text>
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
  checkboxText: {
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
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
    marginBottom: 16,
    textAlign: 'center'
  },
});