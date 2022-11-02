import { useState } from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react"

const GRID_COLORS = {
  default: 'green',
  selected: 'red'
};

const ButtonGrid = () => {
  // generates random number
  const getRandomNumber = (min = 1, max = 10) => Math.floor((Math.random() * (max-min)+min));
  
  const [selectedItem, setSelectedItem] = useState(getRandomNumber());
  
  //checks if the item is selected 
  const isSelected = (value) => selectedItem === value;

  const handleSelection = (event) => {
    event.preventDefault();
    const currentSelection = parseInt(event.target.value);
    isSelected(currentSelection) ? 
      setSelectedItem(getRandomNumber()) :
      setSelectedItem(currentSelection);
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
      {Array.apply(null, {length: 9}).map(Number.call, Number).map(element => (
        <GridItem key={element+1}>
          <Button
            colorScheme={isSelected(element+1) ? GRID_COLORS.selected : GRID_COLORS.default }
            key={element+1}
            value={element+1}
            onClick={handleSelection}
            >
              {element+1}
            </Button>
        </GridItem>
      ))}
    </Grid>
  )
}

export default ButtonGrid
