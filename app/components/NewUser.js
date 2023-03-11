import { StyleSheet, View, Image } from 'react-native'
import React, {useState} from 'react'
import { Text, TextInput, Button } from 'react-native-paper';
import * as Yup from 'yup';


import usePostData from '../hooks/usePostData';
import colors from '../config/colors';




export default function NewUser({navigation}) {

  

  const handleLoginRedirect = () => {
    navigation.navigate('Login');
  };

  const [data, setData] = useState()
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Nome de Utilizador é obrigatório')
    .min(6, "Nome de utilizador tem de ter no mínimo 6 caracteres")
    .max(18, "Nome de utilizador tem de ter no máximo 18 caracteres"),
    email: Yup.string().email('E-mail inválido.').required('E-mail é obrigatório'),
    password: Yup.string().required('Password é obrigatória')
    .min(8, "Password tem de ter no mínimo 8 caracteres")
    .max(20, "Password tem de ter no máximo 20 caracteres"),
  });

  const initialValues = { username: '', email:'', password:'',  }
  
  const { formik, isLoading } = usePostData(
    initialValues,
    validationSchema,
    (data) => {
      setData(data);
      console.log('Data posted successfully', data);
    },
    'api/signup/'
  );
  
  
  
  


  return (
    

    
    <View style={styles.container}>
    <View style={styles.header}>
      <Image source={require("../assets/logo.png")}/>
      <Text variant="headlineLarge">Roda Maria</Text>
    </View>
    <View  style={styles.form}>
      
      
          <View>
            <TextInput mode="outlined" outlineColor={colors.primary}
            placeholder="Utilizador"
            onChangeText={formik.handleChange('username')}
            value={formik.values.username}/>

            {formik.errors.username && <Text style={{ color: 'red' }}>
              {formik.errors.username}</Text>}

            <TextInput mode="outlined" outlineColor={colors.primary}
            placeholder="Email"
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}/>

            {formik.errors.email && <Text style={{ color: 'red' }}>
              {formik.errors.email}</Text>}

            <TextInput mode="outlined" outlineColor={colors.primary}
            placeholder="Password"
            onChangeText={formik.handleChange('password')}
            secureTextEntry={true}
            value={formik.values.password}/>

            {formik.errors.password && <Text style={{ color: 'red' }}>
              {formik.errors.password}</Text>}

              {data && <Text style={{ color: 'red' }}>{data.msg}</Text>}

            <Button mode="contained" buttonColor={colors.primary} 
            onPress={formik.handleSubmit} 
            disabled={isLoading}>Registrar</Button>
          </View>
         
      
          
          <Button style={{ marginTop:7 }} 
          mode="contained" 
          buttonColor="black"
          onPress={handleLoginRedirect}>
            Voltar ao Login</Button>
    </View>
    <View style={styles.buttonContainer}>
      
     
    </View>
  </View>
  
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    header:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    form:{
        flex:2,
        justifyContent:"center"
    },
    buttonContainer:{
        flex:2
    }
})