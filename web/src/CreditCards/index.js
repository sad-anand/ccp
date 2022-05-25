import "./styles.css";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function convertCardNumber(cardNumber){
  var numberStr = cardNumber.toString().match(/.{1,4}/g).join(' ');
  return numberStr;
}

export default function CreditCards(props) {
 
  return (
    <TableContainer component={Paper}>
	    <div><h2>Existing Cards</h2></div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="cards-header">
            <TableCell className="card-cell" align="center">Name</TableCell>
            <TableCell className="card-cell" align="center">Card Number</TableCell>
            <TableCell className="card-cell" align="center">Balance</TableCell>
            <TableCell className="card-cell" align="center">Limit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.cards?.length ? props.cards.map((card) => (
            <TableRow
              key={card.cardNumber}
              className="card-row"
            >
              <TableCell className="card-cell" align="center">{card.name}</TableCell>
              <TableCell className="card-cell" align="center">{convertCardNumber(card.cardNumber)}</TableCell>
              <TableCell className="card-cell" align="center">£{card.balance}</TableCell>
              <TableCell className="card-cell" align="center">£{card.limit}</TableCell>
            </TableRow>
          )) : <TableRow><TableCell colSpan={4} align="center" style={{backgroundColor: "white"}}>No Card Found</TableCell></TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
