import { useState } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState<number>(0);
    const [inputNumber, setInputNumber] = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNumber = Number(e.target.value);
        if (!Number.isNaN(newNumber)) {
            setInputNumber(newNumber);
        }
    };

    const setCountAndResetInput = (newCount: number) => {
        setCount(newCount);
        setInputNumber(0);
    };

    const handleIncrement = () => {
        setCountAndResetInput(count + inputNumber);
    };

    const handleDecrement = () => {
        setCountAndResetInput(count - inputNumber);
    };

    return {
        count,
        inputNumber,
        handleInputChange,
        handleIncrement,
        handleDecrement,
    };
};
