import React, { useState } from 'react';
import { Image } from 'react-native';
import colors from '../../enums/colors';

import { Container, Title, Gradient } from './styles';

const ToggleButton = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (id) => {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <Container onPress={() => handleSelectItem(data.id)} >
      <Gradient
        isSelected={selectedItems.includes(data.id) ? true : false}
        colors={[colors.orange, colors.lightOrange]}
      >
        <Image style={{ marginBottom: 15 }} source={data.image} />
        <Title>{data.name}</Title>
      </Gradient>
    </Container>
  );
}

export default ToggleButton;