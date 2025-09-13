
import React from 'react';
import Calculator from './components/Calculator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-900 font-sans">
        <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight">C Code Sum Calculator</h1>
            <p className="text-slate-400 mt-2 text-lg">An interactive web version of a classic C program.</p>
        </header>
        <main className="w-full max-w-2xl">
            <Calculator />
        </main>
        <footer className="text-center mt-12 text-slate-500">
            <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
    </div>
  );
};

export default App;
