
import React, { useState, useCallback } from 'react';
import CodeBlock from './CodeBlock';

const cCode = `
#include <stdio.h>

int main() {
    int sum=0;
    int i;
    int b;
    printf("enter the value for you want to find the constant sum from 0-",b);
    scanf("%d",&b);
    for(i=1;i<=b;i++){
        sum=sum+i;
    }
    printf("sum is %d",sum);

    return 0;
}`;

const Calculator: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [sum, setSum] = useState<number | null>(null);
    const [error, setError] = useState<string>('');
    const [showCode, setShowCode] = useState<boolean>(false);

    const handleCalculate = useCallback(() => {
        setError('');
        setSum(null);

        const num = parseInt(inputValue, 10);

        if (isNaN(num) || inputValue.trim() === '') {
            setError('Please enter a valid integer.');
            return;
        }

        if (num < 0) {
            setError('Please enter a non-negative integer.');
            return;
        }
        
        // Using the more efficient formula: n * (n + 1) / 2
        // This is equivalent to the C code's for loop.
        const calculatedSum = (num * (num + 1)) / 2;
        setSum(calculatedSum);

    }, [inputValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (sum !== null) {
            setSum(null);
        }
        if (error) {
            setError('');
        }
    };

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-700">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-slate-300">Enter Number (b)</label>
                    <input
                        id="number-input"
                        type="number"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
                        placeholder="e.g., 100"
                        className="w-full bg-slate-700 border border-slate-600 text-white text-lg rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block p-3 transition duration-200"
                    />
                </div>
                <div className="flex-shrink-0 self-end">
                    <button
                        onClick={handleCalculate}
                        className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-bold rounded-lg text-lg px-8 py-3 text-center text-slate-900 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Calculate Sum
                    </button>
                </div>
            </div>

            {error && <p className="mt-4 text-red-400 text-center">{error}</p>}

            {sum !== null && (
                 <div className="mt-6 p-6 bg-slate-900/70 rounded-lg border border-slate-700 text-center">
                    <p className="text-slate-400">Sum from 1 to {parseInt(inputValue, 10)} is:</p>
                    <p className="text-4xl font-extrabold text-green-400 tracking-wider break-words">{sum.toLocaleString()}</p>
                </div>
            )}
            
            <div className="mt-8 text-center">
                <button 
                    onClick={() => setShowCode(!showCode)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                >
                    {showCode ? 'Hide' : 'Show'} Original C Code
                </button>
            </div>

            {showCode && <CodeBlock code={cCode} />}
        </div>
    );
};

export default Calculator;
