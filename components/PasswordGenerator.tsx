import { useContext } from 'react';
import {
    PasswordContext,
    PasswordActionType,
    GeneratePasswordAction,
} from './passwordGeneratorContext';

export const PasswordGenerator = () => {
    const { state, dispatch } = useContext(PasswordContext);

    const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const length = parseInt(event.target.value, 10);
        dispatch({ type: PasswordActionType.SET_LENGTH, payload: length });
    };

    const handleIncludeUppercaseToggle = () => {
        dispatch({ type: PasswordActionType.TOGGLE_INCLUDE_UPPERCASE });
    };

    const handleIncludeNumbersToggle = () => {
        dispatch({ type: PasswordActionType.TOGGLE_INCLUDE_NUMBERS });
    };

    const handleIncludeSymbolsToggle = () => {
        dispatch({ type: PasswordActionType.TOGGLE_INCLUDE_SYMBOLS });
    };

    const handleGeneratePasswordClick = () => {
        dispatch({ type: PasswordActionType.GENERATE_PASSWORD });
    };

    let passwordStrength = '';
    if (state.length < 8) {
        passwordStrength = 'weak noob';
    } else if (state.length <= 12) {
        passwordStrength = 'medium... I meaaan its alright like...';
    } else if (state.length > 12)
        passwordStrength = 'strong ez W';
     else
        passwordStrength= "Input Number";

    return (
        <div>
            <div>
                <label>
                    Password length:
                    <input type="number" min="6" max="32" value={state.length} onChange={handleLengthChange} />
                </label>
                <span> ({passwordStrength})</span>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={state.includeUppercase}
                        onChange={handleIncludeUppercaseToggle}
                    />
                    Include uppercase letters
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={state.includeNumbers}
                        onChange={handleIncludeNumbersToggle}
                    />
                    Include numbers
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={state.includeSymbols}
                        onChange={handleIncludeSymbolsToggle}
                    />
                    Include symbols
                </label>
            </div>
            <div>
                <button onClick={handleGeneratePasswordClick}>Generate password</button>
            </div>
            <div>
                <label>
                    Password:
                    <input type="text" value={state.value} readOnly />
                </label>
            </div>
        </div>
    );
};
