import React from 'react';

export default function Highlight({
  children,
  backgroundColor = '#1877F2',
  color = '#fff',
}) {
  return (
    <span
      style={{
        backgroundColor: backgroundColor,
        borderRadius: '2px',
        color: color,
        padding: '0.2rem',
      }}
    >
      {children}
    </span>
  );
}
