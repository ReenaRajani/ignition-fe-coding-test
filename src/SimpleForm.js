import React, { useState } from "react";
import { Alert, AlertTitle, AlertIcon, Box , InputGroup, Input, Button, InputRightElement} from "@chakra-ui/react";

import { isValidDecimal } from "./lib/isValidDecimal";

const ALERT_STATUS = {
  ERROR: 'error',
  SUCCESS: 'success'
};

const ALERT_COLORS = {
  success: 'green',
  error: 'red'
};
const SimpleForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState(ALERT_STATUS.ERROR)
  const [amount, setAmount] = useState('');
  const handleClick = (event) => {
    event.preventDefault();
    setShowAlert(true);
    isValidDecimal(amount) ? setStatus(ALERT_STATUS.SUCCESS) : setStatus(ALERT_STATUS.ERROR);
  }

  return (
    <Box p='3' maxW="xl">
      <InputGroup size='md' mb='1'>
        <Input
          pr='4.5rem'
          type='text'
          placeholder='Enter Amount'
          onChange={e => setAmount(e.target.value)}
        />
        <InputRightElement width='6rem'>
          <Button h='1.5rem' size='md' onClick={handleClick}>
            Check
          </Button>
        </InputRightElement>
      </InputGroup>
      {showAlert ? 
      <Alert status={status} variant='subtle' color={ALERT_COLORS[status]} backgroundColor='transparent'>
        <AlertIcon />
        <AlertTitle>{status === ALERT_STATUS.SUCCESS ? 'Valid' : 'Not Valid'}</AlertTitle>
      </Alert> : ''}
    </Box>
    
  )
}

export default SimpleForm
