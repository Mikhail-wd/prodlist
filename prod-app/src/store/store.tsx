import { createGlobalState } from 'react-hooks-global-state';

export const {setGlobalState, useGlobalState } = createGlobalState({
  headerName: '',
  change: 0,
})