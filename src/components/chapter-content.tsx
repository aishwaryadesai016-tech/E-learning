"use client"

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function ChapterContent({ content }: { content: string }) {
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  const parts = content.split(codeBlockRegex);

  return (
    <div>
      {parts.map((part, index) => {
        // Even indices are plain text, odd are language, and the one after is the code
        if (index % 3 === 0) {
           return <span key={index} dangerouslySetInnerHTML={{ __html: part.replace(/\n/g, '<br />') }} />;
        } else if (index % 3 === 1) {
          const language = part || 'text';
          const code = parts[index + 1];
          return (
            <div key={index} className="my-4 rounded-lg overflow-hidden bg-[#1e1e1e]">
              <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{ margin: 0, padding: '1rem', borderRadius: '0' }}
                codeTagProps={{ style: { fontFamily: 'var(--font-code)' } }}
              >
                {code.trim()}
              </SyntaxHighlighter>
            </div>
          );
        }
        return null; // Skip the code part itself as it's handled with the language part
      })}
    </div>
  );
}
