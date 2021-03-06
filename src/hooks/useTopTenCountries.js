import { useContext } from 'react'
import { TopTenContext } from '../contexts/topTenContext';
import useCovidApi from './useCovidApi';
import { countries } from '../constaints';
import {countryCovidDataMapper} from '../utils/dataMapper';

function useTopTenCountries() {
  const {topTenState, topTenDispatch} = useContext(TopTenContext);

  useCovidApi(`${countries}?sort=${topTenState.dataKey}`, {
    initialData: [],
    dataRefiner: data => { 
      topTenDispatch({ type: 'SET_COUNTRY_DATA', payload: countryCovidDataMapper(data.slice(0, 10))});
    }
  });
}

export default useTopTenCountries
