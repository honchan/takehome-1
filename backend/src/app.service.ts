import { Injectable } from '@nestjs/common';

import binanceBook from '../binance-book.json';
import krakenBook from '../kraken-book.json';
import coinbaseBook from '../coinbase-book.json';

import { OrderBook, Pair } from './types/order-book.type';

@Injectable()
export class AppService {
  private parseBookJSON(exchange: 'binance' | 'kraken' | 'coinbase'): {
    bids: Pair[];
    asks: Pair[];
  } {
    if (exchange === 'binance') {
      return {
        bids: binanceBook.bids.map(([price, amount]) => ({
          price: parseFloat(price),
          amount: parseFloat(amount),
        })),
        asks: binanceBook.asks.map(([price, amount]) => ({
          price: parseFloat(price),
          amount: parseFloat(amount),
        })),
      };
    } else if (exchange === 'coinbase') {
      return {
        bids: coinbaseBook.bids.map(
          ([price, amount, count]: [string, string, number]) => ({
            price: parseFloat(price),
            amount: parseFloat(amount) * count,
          }),
        ),
        asks: coinbaseBook.asks.map(
          ([price, amount, count]: [string, string, number]) => ({
            price: parseFloat(price),
            amount: parseFloat(amount) * count,
          }),
        ),
      };
    } else if (exchange === 'kraken') {
      return {
        bids: krakenBook.result.XBTUSDT.bids.map(
          ([price, amount]: [string, string]) => ({
            price: parseFloat(price),
            amount: parseFloat(amount),
          }),
        ),
        asks: krakenBook.result.XBTUSDT.asks.map(
          ([price, amount]: [string, string]) => ({
            price: parseFloat(price),
            amount: parseFloat(amount),
          }),
        ),
      };
    }
  }

  private parseBooks(): OrderBook[] {
    let binance: OrderBook = {
      exchange: 'binance',
      ...this.parseBookJSON('binance'),
    };

    let coinbase: OrderBook = {
      exchange: 'coinbase',
      ...this.parseBookJSON('coinbase'),
    };

    let kraken: OrderBook = {
      exchange: 'kraken',
      ...this.parseBookJSON('kraken'),
    };

    return [binance, coinbase, kraken];
  }

  getBestPrice(): string {
    return 'Hello World!';
  }
}
