import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x258711A52e2970216E126DAFaa587734b7b0eB05";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/TxWTTIy6j2kU5nmiW0AgG0ZTKUGBqXo6",
  },
};
