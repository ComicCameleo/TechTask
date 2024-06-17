import { test as base } from '@playwright/test';
import HomePage from '../pages/home.page'
import NewMarketOrderPopUp from '../pages/newMarketOrder.popup'
import SignUpPopUp from '../pages/signup.popup'

type BasePages = {
  homePage: HomePage;
  newMarketOrderPopUp: NewMarketOrderPopUp;
  signUpPopUp: SignUpPopUp;
};

export const test = base.extend<BasePages>({
    homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  newMarketOrderPopUp: async ({ page }, use) => {
    const newMarketOrderPopUp = new NewMarketOrderPopUp(page);
    await use(newMarketOrderPopUp);
  },
  signUpPopUp: async ({ page }, use) => {
    const signUpPopUp = new SignUpPopUp(page);
    await use(signUpPopUp);
  },
});

export type DefaultUser = {
    defaultUser: {
      email: string;
      password: string;
    };
};
  
export const loggedInTest = test.extend<DefaultUser>({
    defaultUser: [
      {
        email: "userForTest@spotware.com",
        password: "userForTest@spotware.com",
      },
      {
        option: true,
      },
    ],
    homePage: async ({ homePage, signUpPopUp, defaultUser, page }, use) => {
      await page.goto("");
      await homePage.openLoginPopup();
      await signUpPopUp.signIn(defaultUser.email, defaultUser.password);
      await homePage.cleanAllOrders();
      await use(homePage);
    },
});

export { expect } from '@playwright/test';