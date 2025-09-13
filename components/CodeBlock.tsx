
import React from 'react';

interface CodeBlockProps {
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    return (
        <div className="mt-4 bg-gray-900 rounded-lg p-4 border border-slate-700 overflow-x-auto">
            <pre className="text-sm text-gray-300">
                <code className="language-c font-mono">
                    {code.trim()}
                </code>
            </pre>
        </div>
    );
};

export default CodeBlock;
