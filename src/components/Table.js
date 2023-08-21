import React from 'react';

const Table = ({ headers, rows }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="py-2 px-4 border-b">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="py-2 px-4 border-b">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
