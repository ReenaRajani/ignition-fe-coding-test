import { useState } from "react"
import { Box, Button, ButtonGroup } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"

import Detail from "./Detail"
import { data } from "./data"

const categories = [...new Set(data.map(({ category }) => category))]

const DataGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const setCategory = (event) => {setSelectedCategory(event.target.name)}

  return (
    <Box>
      <Heading size="1xl">Click a button to select a category</Heading>
      <ButtonGroup>
        {categories.map((category) => (
          <Button
            onClick={setCategory}
            colorScheme="teal"
            variant={selectedCategory === category ? "solid" : "outline"}
            key={category}
            name={category}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      <Detail selectedCategory={selectedCategory} key={selectedCategory}/>
    </Box>
  )
}

export default DataGrid
