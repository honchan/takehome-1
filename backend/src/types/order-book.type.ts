export type Pair = {
  price: number;
  amount: number;
};

export type OrderBook = {
  exchange: string;
  bids: Pair[];
  asks: Pair[];
};
