import { test, expect, loggedInTest } from '../fixtures/basefixture';

loggedInTest('place default order using login fixture', async ({ homePage, newMarketOrderPopUp }) => {
  await homePage.openNewOrderPopUp();
  await newMarketOrderPopUp.placeOrder();
  await expect(homePage.positionCounterLabel).toHaveText("1");
  await expect(homePage.closeOrderButtonList).toHaveCount(1);
});
