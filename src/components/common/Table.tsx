type TableProps = {
  headers: string[];
  rows: string[][];
};

export const Table = ({ headers, rows }: TableProps) => {
  return (
    <div className="table-shell panel-surface">
      <table className="text-left text-sm">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="align-middle">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
