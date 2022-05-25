package com.ccp.app.resource;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreditCardService {

	@Autowired
	private CreditCardVerificationService creditCardVerificationService;

	public void addCreditCard(CreditCard creditCard) throws Exception {
		if (creditCardVerificationService.verifyCardNumber(creditCard.getCardNumber())) {
			CardStore.addCard(creditCard);
		} else {
			throw new Exception("Internal Server Error");
		}
	}

	public List<CreditCard> getAllCard() {
		return new ArrayList<CreditCard>(CardStore.getCards());
	}
}
