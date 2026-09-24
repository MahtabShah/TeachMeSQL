const Table = ({ table }) => {
  return (
    <div className="w-full mx-w-[480px] overflow-auto rounded-lg border border-gray-300 border-b-0">
      <table className="w-full border-collapse">
        <thead className="w-full">
          <tr>
            {table.column.map((column) => (
              <th
                key={column}
                className="border-b border-r border-gray-300 px-4 py-3 text-left text-sm font-semibold bg-slate-200 text-gray-800 last:border-r-0">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {table.column.map((_, columnIndex) => (
                <td
                  key={columnIndex}
                  className="border-b border-r border-gray-300 px-4 py-3 text-sm text-gray-700 last:border-r-0">
                  {row[columnIndex] ?? "NULL"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
