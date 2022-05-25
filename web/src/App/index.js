import './styles.css';

import React, { useEffect, useState } from 'react';

import AddCardForm from '../AddCardForm';
import CreditCards from "../CreditCards";
import { StyledEngineProvider } from '@mui/material';
import { getCreditCards } from '../service/card-api';

function App() {

  const [cards, setCards] = useState([]);

  async function getCards() {
    const data =  await getCreditCards();
    setCards(data);
  }

  useEffect(() => {
    getCards();
 }, []);

  const handleSetAddCardSuccess = () => {
    getCards();
  }
  
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <AddCardForm onSuccess={handleSetAddCardSuccess}/>
        <CreditCards cards={cards}/>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

export default App;
