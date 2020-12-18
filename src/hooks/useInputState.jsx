import { useState } from 'react';

const useInputState = () => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: event => {
      setValue(event.target.value);
    },
    reset: () => setValue('')
  };
};


export default useInputState
