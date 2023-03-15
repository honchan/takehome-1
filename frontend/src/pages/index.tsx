import { CurrencyList } from '@/components/currency-list';
import { Currency } from '@/types/currency.type';
import json from '../../currencies.json';

export const getStaticProps = async () => {
  return {
    props: {
      currencies: json,
    },
  };
};

type Props = {
  currencies: Currency[];
};

export default function Home(props: Props) {
  return (
    <>
      <CurrencyList currencies={props.currencies} />
    </>
  );
}
