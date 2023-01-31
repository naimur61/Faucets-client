import React from 'react';

const tableHeader = [
   { txt: 'Sr' },
   { txt: 'Time' },
   { txt: 'Amount' },
   { txt: 'Hash' }
]

const Table = () => (
   <table style={{ borderCollapse: 'collapse', width: '100%', }}>
      <thead>
         <tr>
            {tableHeader.map((header, i) => <th key={i} style={{ border: '1px solid #eee', padding: '8px' }}>{header.txt}</th>
            )}
         </tr>
      </thead>
      <tbody>
         <tr>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>i</td>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>159</td>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>6.0</td>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>24</td>
         </tr>
         <tr>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>I</td>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>237</td>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>9.0</td>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>37</td>
         </tr>
         <tr>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>i</td>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>262</td>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>16.0</td>
            <td style={{ border: '1px solid #eee', padding: '8px' }}>24</td>
         </tr>
      </tbody>
   </table>
);
export default Table;



