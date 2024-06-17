import { test, expect, loggedInTest } from '../fixtures/basefixture';

test('place default order ', async ({ page, homePage, signUpPopUp, newMarketOrderPopUp }) => {
  await page.goto("");
  await homePage.openLoginPopup();
  await signUpPopUp.signIn("userForTest@spotware.com","userForTest@spotware.com");
  await homePage.cleanAllOrders();
  await homePage.openNewOrderPopUp();
  await newMarketOrderPopUp.placeOrder();
  await expect(homePage.positionCounterLabel).toHaveText("1");
  await expect(homePage.closeOrderButtonList).toHaveCount(1);
});



loggedInTest('place default order using login fixture', async ({ homePage, newMarketOrderPopUp }) => {
  await homePage.openNewOrderPopUp();
  await newMarketOrderPopUp.placeOrder();
  await expect(homePage.positionCounterLabel).toHaveText("1");
  await expect(homePage.closeOrderButtonList).toHaveCount(1);
});