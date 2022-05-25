package com.ccp.app.resource;

import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Component;

@Component
public class CardStore {
	
	private static Set<CreditCard> cardStore = new HashSet<>();

	public static Set<CreditCard> getCards() {
		return cardStore;
	}

	public static void addCard(CreditCard creditcard) throws DuplicateCardException {
		if(!cardStore.add(creditcard)) {
			throw new DuplicateCardException(Constants.DUPLICATE_CARD);
		};
	}

	public static void setCardStore(Set<CreditCard> cardStore) throws Exception {
		throw new Exception(Constants.INVALID_OPERATION);
	}

}
