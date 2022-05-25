package com.ccp.app.resource;

import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

@Service
public class CreditCardVerificationService {

	public boolean verifyCardNumber(Long cardNumber) {

		if (ObjectUtils.isEmpty(cardNumber) || cardNumber < 0) {
			return false;
		}

		int length = (int) (Math.log10(cardNumber) + 1);
		
		if (length < 16 || length > 19) { return false; }
		
		boolean isEven = (length % 2 == 0) ? true : false;
		int sum = 0;
		if (isEven) {
			length = length - 1;
			sum = (int) (sum + cardNumber % 10);
			cardNumber = cardNumber / 10;
		}

		for (int i = 0; i <= length; i++) {
			if (i % 2 == 1) {
				int chunk = (int) ((cardNumber % 10) * 2);
				sum += chunk > 9 ? chunk - 9 : chunk;
				cardNumber = cardNumber / 10;
			} else {
				sum = (int) (sum + cardNumber % 10);
				cardNumber = cardNumber / 10;
			}
		}
		return (sum % 10 == 0);
	}
}
