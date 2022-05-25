package com.ccp.app;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.HashSet;

import org.hamcrest.core.Is;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import com.ccp.app.resource.CardStore;

@RunWith(MockitoJUnitRunner.class)
public class CardStoreTest {

	@Test
	public void testSetCardStore() {
		Exception exception = assertThrows(Exception.class, () -> {
			CardStore.setCardStore(new HashSet<>());
		});
		assertThat(exception.getMessage(),Is.is("Invalid Operation"));
	}

}
