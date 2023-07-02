import React, { useState, FC } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, KeyboardTypeOptions } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface InputProps {
  style?: any;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  
}

const Input: FC<InputProps> = ({
  style,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword && secureTextEntry}
        keyboardType={keyboardType}
       
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
          <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="#aaa" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 16
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  toggleButton: {
    paddingHorizontal: 16,
    paddingVertical: 8
  }
});

export default Input;
