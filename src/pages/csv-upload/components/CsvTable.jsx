import React, { useEffect, useState } from "react";

function CsvTable({ tableData, setTableData }) {
  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    if (!tableData.length) {
      return;
    }
    let firstObject = tableData[0];
    let keys = Object.keys(firstObject);
    setHeaders(keys);
  }, [tableData]);
  return (
    <div class="csv-table">
      <table>
        <thead>
          <tr>
            {headers.map((x) => (
              <th>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <>
              <tr>
                {Object.values(data).map((x) => (
                  <td>{x}</td>
                ))}
              </tr>
              <tr className="table-for-space">
                {Object.values(data).map((x) => (
                  <td></td>
                ))}
              </tr>
            </>
          ))}
        </tbody>

        {/* <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr className="table-for-space">
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody> */}
      </table>
    </div>
  );
}

export default CsvTable;
