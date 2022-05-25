package com.ccp.app;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import org.hamcrest.core.Is;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import com.ccp.app.resource.CreditCardVerificationService;

@RunWith(MockitoJUnitRunner.class)
public class CreditCardVerificationServiceTest {

	private CreditCardVerificationService cardVerificationService = new CreditCardVerificationService();

	@Test
	public void testValidVerifyCardNumber() {
		assertAll(() -> assertThat(cardVerificationService.verifyCardNumber(0l), Is.is(false)),
				() -> assertThat(cardVerificationService.verifyCardNumber(-1l), Is.is(false)),
				() -> assertThat(cardVerificationService.verifyCardNumber(null), Is.is(false)),
				() -> assertThat(cardVerificationService.verifyCardNumber(4388576018402626l), Is.is(false)),
				() -> assertThat(cardVerificationService.verifyCardNumber(4388576018402626l), Is.is(false)),
				() -> assertThat(cardVerificationService.verifyCardNumber(43885760184026261l), Is.is(false)),
				() -> assertThat(cardVerificationService.verifyCardNumber(19191919191919190l), Is.is(true)));
	}
}
