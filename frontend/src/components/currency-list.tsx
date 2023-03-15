import React from 'react';
import { Currency } from '@/types/currency.type';
import styles from './currency-list.module.css';

type Props = {
  currencies: Currency[];
};

function filterCurrencies(
  currencies: Currency[],
  filterUs: boolean,
  filterTestMode: boolean
): Currency[] {
  let filteredCurrencies = currencies;

  if (filterUs) {
    filteredCurrencies = filteredCurrencies.filter(
      (currency) => currency.isSupportedInUS
    );
  }

  if (filterTestMode) {
    filteredCurrencies = filteredCurrencies.filter(
      (currency) => currency.supportsTestMode
    );
  }

  return filteredCurrencies;
}

function sortCurrencies(
  currencies: Currency[],
  sort: 'none' | 'name' | 'code' | 'random'
): Currency[] {
  const copy = currencies.slice();

  if (sort === 'none') {
    return copy;
  }

  if (sort === 'name') {
    return copy.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === 'code') {
    return copy.sort((a, b) => a.name.localeCompare(b.code));
  }

  if (sort === 'random') {
    return copy.sort(() => Math.random() - 0.5);
  }

  return copy;
}

export const CurrencyList = ({ currencies: initialCurrencies }: Props) => {
  const [currencies, setCurrencies] =
    React.useState<Currency[]>(initialCurrencies);
  const [usFilter, setUsFilter] = React.useState(false);
  const [testModeFilter, setTestModeFilter] = React.useState(false);
  const [sort, setSort] = React.useState<'none' | 'name' | 'code' | 'random'>(
    'none'
  );

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'uscheckbox') {
      setUsFilter(e.target.checked);
    }

    if (e.target.name === 'testmodecheckbox') {
      setTestModeFilter(e.target.checked);
    }
  };

  const handleSort = (sort: 'none' | 'name' | 'code' | 'random') => {
    const sortedCurrencies = sortCurrencies(currencies, sort);
    setCurrencies(sortedCurrencies);
    setSort(sort);
  };

  const filteredCurrencies = filterCurrencies(
    currencies,
    usFilter,
    testModeFilter
  );

  const renderSymbols = filteredCurrencies.map((currency) => {
    const supportsUS = currency.isSupportedInUS ? 'Yes' : 'No';
    const supportsTestMode = currency.supportsTestMode ? 'Yes' : 'No';

    return (
      <div key={currency.id} className={styles.item}>
        <p className={styles['symbol-title']}>{currency.name}</p>
        <p>{currency.code}</p>
        <p>Supports US: {supportsUS}</p>
        <p>Supports Test Mode: {supportsTestMode}</p>
      </div>
    );
  });

  return (
    <div className="main">
      <h1>View Currencies</h1>
      <div className={styles.controls}>
        <div className={styles['checkbox-wrapper']}>
          <label htmlFor="uscheckbox" className={styles['checkbox-label']}>
            Supported in US
          </label>
          <input
            type="checkbox"
            id="uscheckbox"
            name="uscheckbox"
            className={styles.checkbox}
            checked={usFilter}
            onChange={handleFilter}
          />
        </div>

        <div className={styles['checkbox-wrapper']}>
          <label
            htmlFor="testmodecheckbox"
            className={styles['checkbox-label']}
          >
            Supports test Mode
          </label>
          <input
            type="checkbox"
            id="testmodecheckbox"
            name="testmodecheckbox"
            className={styles.checkbox}
            checked={testModeFilter}
            onChange={handleFilter}
          />
        </div>

        <button className={styles.button} onClick={() => handleSort('name')}>
          Sort by name
        </button>
        <button className={styles.button} onClick={() => handleSort('code')}>
          Sort by code
        </button>
        <button className={styles.button} onClick={() => handleSort('random')}>
          Sort randomly
        </button>
      </div>

      <h3>Total: {filteredCurrencies.length}</h3>
      <h3>Sorting: {sort}</h3>
      <div className={styles.container}>{renderSymbols}</div>
    </div>
  );
};
