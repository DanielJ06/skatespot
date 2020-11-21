import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Feather';

const Hamburguer = () => {
  const navigation = useNavigation()

  function handleOpenModal() {
    navigation.toggleDrawer()
  };

  return (
    <TouchableOpacity onPress={handleOpenModal} >
      <Icon 
        name="menu"
        size={27}
      />
    </TouchableOpacity>
  );
}

export default Hamburguer;