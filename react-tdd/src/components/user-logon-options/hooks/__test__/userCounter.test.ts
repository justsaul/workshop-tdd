import { renderHook, act} from '@testing-library/react';

import { useCounter } from '../useCounter.hook';

test(`useCounter()`, () => {
  const { result, rerender } = renderHook((reset) => useCounter(reset), {
    initialProps: false,
  })
})