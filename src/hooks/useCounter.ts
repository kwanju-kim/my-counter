import { useState } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState<number>(0);
    const [inputNumber, setInputNumber] = useState<number>(0);
    const [history, setHistory] = useState<number[]>([0]);
    const [historyIndex, setHistoryIndex] = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNumber = Number(e.target.value);
        if (!Number.isNaN(newNumber)) {
            setInputNumber(newNumber);
        }
    };

    const setCountAndResetInput = (newCount: number) => {
        setCount(newCount);
        setInputNumber(0);

        // 히스토리에 새 상태 추가
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(newCount);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
    };

    const handleIncrement = () => {
        setCountAndResetInput(count + inputNumber);
    };

    const handleDecrement = () => {
        setCountAndResetInput(count - inputNumber);
    };

    const handleUndo = () => {
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            setCount(history[newIndex]);
            setInputNumber(0);
        }
    };

    const handleRedo = () => {
        if (historyIndex < history.length - 1) {
            const newIndex = historyIndex + 1;
            setHistoryIndex(newIndex);
            setCount(history[newIndex]);
            setInputNumber(0);
        }
    };

    return {
        count,
        inputNumber,
        handleInputChange,
        handleIncrement,
        handleDecrement,
        handleUndo,
        handleRedo,
        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1,
    };
};
