import { chromeDriver } from "./chrome";

export const enum BrowserNames {
  CHROME = "chrome",
  FIREFOX = "firefox",
  SAFARI = "safari",
}

export type BrowserDriver = {
  name: BrowserNames;
  initialize: () => void;
  createSession: (url: string) => void;
  uploadDeviceCode: () => void;
  endSession: () => void;
  shutdown: () => void;
};

export const getBrowserDriver = (name: BrowserNames): BrowserDriver => {
  switch (name) {
    case BrowserNames.CHROME:
      return chromeDriver;
    case BrowserNames.FIREFOX:
    case BrowserNames.SAFARI:
      throw `Driver for ${name} is currently unimplemented`;
  }
};