package com.ccp.app.resource;

public class DuplicateCardException extends Exception {
	private static final long serialVersionUID = -8361986625850718581L;
	public DuplicateCardException(String message) {
		super(message);
	}
}
