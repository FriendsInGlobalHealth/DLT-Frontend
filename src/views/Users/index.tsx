
import React, { useState, Component } from "react";
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { View, KeyboardAvoidingView, 
        TextInput, TouchableOpacity, 
        Text, Button} 
        from 'react-native';
import { UsersModelState } from '../../models/Users';  
import { AuthModelState } from "../../models/Auth";      

import Input from "../../components/Inputs";

import styles from "./styles";

interface UsersProps {
    dispatch: Dispatch<AnyAction>;
    user: Users;
}

interface UsersState{
    surname: string,
    name: string,
    phoneNumber: string,
    email: string,
    username: string,
    password: string,
    entryPoint: string,
    status: number,
    isLocked: boolean,
    isExpired: boolean,
    isCredentialsExpired: boolean,
    isEnabled: boolean,
    createdBy: number,
    dateCreated: string,
    updatedBy: number,
    dateUpdated: string,
    locality: number,
    partners: number,
    profiles: number,
    us: number
}

@connect(({ users }: UsersModelState,
    {loggedUser}:AuthModelState) => ({
    submitting: users,
    user: loggedUser
}))
export default class Users extends Component<UsersProps, UsersState>{

    state: UsersState = {
        surname: "",
        name: "",
        phoneNumber: "",
        email: "",
        username: "",
        password: "",
        entryPoint: "",
        status: 1,
        isLocked: false,
        isExpired: false,
        isCredentialsExpired: false,
        isEnabled: true,
        createdBy: 1, // TODO: pegar do user logado
        dateCreated: "2022-01-26T22:00:00.000+00:00", // TODO: Melhor passar responsabilidade para a BD
        updatedBy: 1,
        dateUpdated: "2022-01-26T22:00:00.000+00:00", // TODO: informar data vazia (melhor passar responsabilidade para a BD)
        locality: 1, // TODO: pegar do user logado
        partners: 1, // TODO: pegar do user logado
        profiles: 1, // TODO: Pegar do formulário
        us: 1, // TODO: pegar do user logado
    };

    validate_fields = () => {
        const { surname, name, phoneNumber, email, username, password, entryPoint, status, isLocked, isExpired, isCredentialsExpired, 
            isEnabled, createdBy, dateCreated, updatedBy, dateUpdated, locality, partners, profiles, us } = this.state;

        //TODO perform validations

        return true;
    }

    handlerSave = () => {
        const { surname, name, phoneNumber, email, username, password, entryPoint, status, isLocked, isExpired, isCredentialsExpired, 
            isEnabled, createdBy, dateCreated, updatedBy, dateUpdated, locality, partners, profiles, us } = this.state;
        const { dispatch } = this.props;

        if (this.validate_fields() && dispatch) {
            console.log(surname, name, phoneNumber, email, username, password, entryPoint, status, isLocked, isExpired, isCredentialsExpired, 
                isEnabled, createdBy, dateCreated, updatedBy, dateUpdated, locality, partners, us);
            dispatch({
                type: 'users/create',
                payload: {
                    surname,
                    name,
                    phoneNumber,
                    email,
                    username,
                    password,
                    entryPoint,
                    status,
                    isLocked,
                    isExpired,
                    isCredentialsExpired,
                    isEnabled,
                    createdBy,
                    dateCreated,
                    updatedBy,
                    dateUpdated,
                    locality,
                    partners,
                    profiles,
                    us,
                }
            })
        }
    }

    render(){
        const { user } = this.props;
        
        return(
            
            <KeyboardAvoidingView>
                <View>
    
                </View>
                <View >
                    <View>
                        <Text>Credentials will be sent to the user by email. A password will be generated automatically if not provided.</Text>
                    </View>
                    <View style={styles.containerPage}>
                        <Text style={styles.txtLabel}>E-mail</Text>    
                        <Input 
                            styles={styles.input}
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="email"
                            returnKeyType="send" 
                            onChangeText={(value : string)=> { this.setState({ email: value }) }}
                        />
                        
                        <Text style={styles.txtLabel}>Username</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="username"
                            returnKeyType="send" 
                            onChangeText={(value : string)=> { this.setState({ username: value }) }}
                        />
                                                    
                        <Text style={styles.txtLabel}>Password</Text>                       
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="password"
                            returnKeyType="send" 
                            onChangeText={(value : string)=> { this.setState({ password: value }) }} secureTextEntry
                        />
                        
                        <Text style={styles.txtLabel}>Apelido</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="surname"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ surname: value }) }}
                        />
                        
                        <Text style={styles.txtLabel}>Nome</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="name"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ name: value }) }}
                        />
                        
                        <Text style={styles.txtLabel}>Telemóvel</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="phoneNumber"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ phoneNumber: value }) }}
                        />
                        
                        <Text style={styles.txtLabel}>Ponto de Entrada</Text>
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="entryPoint"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ entryPoint: value }) }}
                        />
                        
                        {/* <Text style={styles.txtLabel}>Bio</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="bio"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ bio: value }) }}/> */}
                            
                        <TouchableOpacity style={styles.btnSubmit} onPress={() => this.handlerSave()}>
                            <Text style={styles.txtLabel}>Save</Text>
                        </TouchableOpacity>
                        {/* <Button onPress={""} title='Save' /> */}
                        {/* <Text>{"E-mail: "+this.state.email}</Text>
                        <Text>{"Username: "+this.state.username}</Text>
                        <Text>{"Password: "+this.state.password}</Text>
                        <Text>{"Name: "+this.state.name}</Text>
                        <Text>{"Website: "+this.state.website}</Text>
                        <Text>{"Location: "+this.state.location}</Text>
                        <Text>{"Bio: "+this.state.bio}</Text> */}
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
