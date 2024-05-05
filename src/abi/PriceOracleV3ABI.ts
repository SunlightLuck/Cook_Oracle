export default [
  {
    inputs: [
      { internalType: "address", name: "addressProvider", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "AddressIsNotContractException",
    type: "error",
  },
  { inputs: [], name: "CallerNotConfiguratorException", type: "error" },
  { inputs: [], name: "CallerNotControllerException", type: "error" },
  { inputs: [], name: "CallerNotPausableAdminException", type: "error" },
  { inputs: [], name: "CallerNotUnpausableAdminException", type: "error" },
  { inputs: [], name: "IncorrectParameterException", type: "error" },
  { inputs: [], name: "IncorrectPriceException", type: "error" },
  { inputs: [], name: "IncorrectPriceFeedException", type: "error" },
  { inputs: [], name: "IncorrectTokenContractException", type: "error" },
  { inputs: [], name: "PriceFeedDoesNotExistException", type: "error" },
  { inputs: [], name: "StalePriceException", type: "error" },
  { inputs: [], name: "ZeroAddressException", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newController",
        type: "address",
      },
    ],
    name: "NewController",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "priceFeed",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "stalenessPeriod",
        type: "uint32",
      },
      { indexed: false, internalType: "bool", name: "skipCheck", type: "bool" },
      { indexed: false, internalType: "bool", name: "trusted", type: "bool" },
    ],
    name: "SetPriceFeed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "priceFeed",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "stalenessPeriod",
        type: "uint32",
      },
      { indexed: false, internalType: "bool", name: "skipCheck", type: "bool" },
    ],
    name: "SetReservePriceFeed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "active", type: "bool" },
    ],
    name: "SetReservePriceFeedStatus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "acl",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "controller",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "tokenFrom", type: "address" },
      { internalType: "address", name: "tokenTo", type: "address" },
    ],
    name: "convert",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "token", type: "address" },
    ],
    name: "convertFromUSD",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "token", type: "address" },
    ],
    name: "convertToUSD",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "getPrice",
    outputs: [{ internalType: "uint256", name: "price", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "bool", name: "reserve", type: "bool" },
    ],
    name: "getPriceRaw",
    outputs: [{ internalType: "uint256", name: "price", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "getPriceSafe",
    outputs: [{ internalType: "uint256", name: "price", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "priceFeedParams",
    outputs: [
      { internalType: "address", name: "priceFeed", type: "address" },
      { internalType: "uint32", name: "stalenessPeriod", type: "uint32" },
      { internalType: "bool", name: "skipCheck", type: "bool" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
      { internalType: "bool", name: "trusted", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "priceFeeds",
    outputs: [{ internalType: "address", name: "priceFeed", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "bool", name: "reserve", type: "bool" },
    ],
    name: "priceFeedsRaw",
    outputs: [{ internalType: "address", name: "priceFeed", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "token", type: "address" },
    ],
    name: "safeConvertToUSD",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newController", type: "address" },
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "priceFeed", type: "address" },
      { internalType: "uint32", name: "stalenessPeriod", type: "uint32" },
      { internalType: "bool", name: "trusted", type: "bool" },
    ],
    name: "setPriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "priceFeed", type: "address" },
      { internalType: "uint32", name: "stalenessPeriod", type: "uint32" },
    ],
    name: "setReservePriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "bool", name: "active", type: "bool" },
    ],
    name: "setReservePriceFeedStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;