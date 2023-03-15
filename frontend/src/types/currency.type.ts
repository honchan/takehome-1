export type Currency = {
  id: string;
  createdAt: string;
  updatedAt: string;
  type: string;
  name: string;
  code: string;
  precision: number;
  maxAmount: number | null;
  minAmount: number | null;
  minBuyAmount: number;
  maxBuyAmount: number | null;
  supportsTestMode: boolean;
  isSupportedInUS: boolean;
};

// {
//   "id": "3c28b499-2066-4890-8b58-79c52994362f",
//   "createdAt": "2020-10-20T17:19:55.110Z",
//   "updatedAt": "2023-03-03T01:01:00.370Z",
//   "type": "crypto",
//   "name": "Aave",
//   "code": "aave",
//   "precision": 2,
//   "maxAmount": null,
//   "minAmount": null,
//   "minBuyAmount": 0.121,
//   "maxBuyAmount": null,
//   "isSellSupported": false,
//   "addressRegex": "^(0x)[0-9A-Fa-f]{40}$",
//   "testnetAddressRegex": "^(0x)[0-9A-Fa-f]{40}$",
//   "supportsAddressTag": false,
//   "addressTagRegex": null,
//   "supportsTestMode": true,
//   "supportsLiveMode": true,
//   "isSuspended": false,
//   "isSupportedInUS": false,
//   "notAllowedUSStates": [],
//   "notAllowedCountries": [],
//   "confirmationsRequired": null,
//   "minSellAmount": null,
//   "maxSellAmount": null,
//   "metadata": {
//     "contractAddress": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
//     "coinType": null,
//     "chainId": "1",
//     "networkCode": "ethereum"
//   }
// },
