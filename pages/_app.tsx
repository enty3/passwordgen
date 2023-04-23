import { useReducer } from 'react';
import { PasswordContext, initialState } from '@/components/passwordGeneratorContext';
import { PasswordGenerator } from '@/components/PasswordGenerator';

const reducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case 'SET_LENGTH':
      return { ...state, length: action.payload };
    case 'TOGGLE_INCLUDE_UPPERCASE':
      return { ...state, includeUppercase: !state.includeUppercase };
    case 'TOGGLE_INCLUDE_NUMBERS':
      return { ...state, includeNumbers: !state.includeNumbers };
    case 'TOGGLE_INCLUDE_SYMBOLS':
      return { ...state, includeSymbols: !state.includeSymbols };
    case 'GENERATE_PASSWORD':
      let characters = '';
      characters += state.includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
      characters += state.includeNumbers ? '0123456789' : '';
      characters += state.includeSymbols ? '!@#$%^&*()_+-=[]{}|;:,.<>?~' : '';
      let password = '';
      for (let i = 0; i < state.length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return { ...state, value: password };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <PasswordContext.Provider value={{ state, dispatch }}>
        <PasswordGenerator />
      </PasswordContext.Provider>
  );
}

export default App;
