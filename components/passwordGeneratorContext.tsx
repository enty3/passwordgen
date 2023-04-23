import { createContext } from 'react';

export interface PasswordState {
    value: string;
    length: number;
    includeUppercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
}

export enum PasswordActionType {
    SET_LENGTH = 'SET_LENGTH',
    TOGGLE_INCLUDE_UPPERCASE = 'TOGGLE_INCLUDE_UPPERCASE',
    TOGGLE_INCLUDE_NUMBERS = 'TOGGLE_INCLUDE_NUMBERS',
    TOGGLE_INCLUDE_SYMBOLS = 'TOGGLE_INCLUDE_SYMBOLS',
    GENERATE_PASSWORD = 'GENERATE_PASSWORD',
}

export interface SetLengthAction {
    type: PasswordActionType.SET_LENGTH;
    payload: number;
}

export interface ToggleIncludeUppercaseAction {
    type: PasswordActionType.TOGGLE_INCLUDE_UPPERCASE;
}

export interface ToggleIncludeNumbersAction {
    type: PasswordActionType.TOGGLE_INCLUDE_NUMBERS;
}

export interface ToggleIncludeSymbolsAction {
    type: PasswordActionType.TOGGLE_INCLUDE_SYMBOLS;
}

export interface GeneratePasswordAction {
    type: PasswordActionType.GENERATE_PASSWORD;
}

export type PasswordAction =
    | SetLengthAction
    | ToggleIncludeUppercaseAction
    | ToggleIncludeNumbersAction
    | ToggleIncludeSymbolsAction
    | GeneratePasswordAction;

export const initialState: PasswordState = {
    value: '',
    length: 10,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true,
};

export const PasswordContext = createContext<{
    state: PasswordState;
    dispatch: React.Dispatch<PasswordAction>;
}>({
    state: initialState,
    dispatch: () => null,
});
