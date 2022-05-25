package com.ccp.app.resource;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;

@RestController
@RequestMapping(value = "/creditcard")
@Api(value = "CreditCardResource", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class CreditCardResource {

	private static final Logger log = LogManager.getLogger(CreditCardResource.class);

	@Autowired
	private CreditCardService cardService;

	@PostMapping
	@ResponseBody
	public ResponseEntity<CreditCardDTO> addCard(@RequestBody CreditCard creditCard) {
		log.info("Request received to save card");
		CreditCardDTO response = new CreditCardDTO();
		try {
			creditCard.setBalance(0);
			cardService.addCreditCard(creditCard);
		} catch (DuplicateCardException e) {
			log.error("Duplicate Card");
			response.setMessage(Constants.INTERNAL_SERVER_ERROR);
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			log.error("Invalid Card Number");
			response.setMessage(Constants.INTERNAL_SERVER_ERROR);
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}
		response = CreditCardDTO.builder().data(creditCard).message(Constants.SUCCESS).build();
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping
	@ResponseBody
	public ResponseEntity<List<CreditCard>> getAllCards() {
		log.info("Request received to get all card");
		return new ResponseEntity<>(cardService.getAllCard(), HttpStatus.OK);
	}

}
