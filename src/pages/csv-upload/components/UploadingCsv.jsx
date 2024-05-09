import React, { useState } from "react";
import Papa from "papaparse";
function UploadingCsv({ tableData, setTableData }) {
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelecteFile] = useState(null);
  const handleFileChange = (e) => {
    let files = e.target.files;
    if (!files.length) {
      return;
    }
    let file = files[0];
    setSelecteFile(file);

    setFileName(file?.name || "");
    console.log("handel change", e.target.file);
  };
  const uploadFile = () => {
    if (!selectedFile) {
      return;
    }
    try {
      Papa.parse(selectedFile, {
        complete: function (results) {
          console.log("Finished:", results.data);
          getCsvTableData(results?.data || []);
        },
      });
    } catch (error) {
      console.log("error in try", error);
    }
  };
  const getCsvTableData = (datas) => {
    if (!datas.length) {
      return;
    }
    let keys = datas[0];
    let newResult = [];
    datas.forEach((data, index) => {
      if (index !== 0) {
        let newObject = {};

        data.forEach((x, i) => {
          if (keys.length > i) {
            newObject[keys[i]] = x;
          }
        });
        newResult.push(newObject);
      }
    });
    setTableData(newResult);
  };
  const removeFile = () => {
    setFileName("");
    setTableData([]);
  };
  return (
    <div className="upload-sec">
      <div className="upload-area">
        {fileName ? (
          <div>
            {" "}
            <p>{fileName}</p>
            <p
              onClick={removeFile}
              className="mt-2 text-center error-color c-pointer"
            >
              Remove
            </p>
          </div>
        ) : (
          <input
            type="file"
            //   hidden
            id="browse"
            className="file-input"
            onChange={handleFileChange}
            accept=".xlsx,.csv"
            //   multiple
          />
        )}
      </div>
      <div>
        <button className="upload-button" onClick={uploadFile}>
          {" "}
          <i className="bi bi-upload mr-2"></i> Upload
        </button>
      </div>
      {/* <ul>
        {tableData.map((x, i) => (
          <li key={i}>{JSON.stringify(x)}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default UploadingCsv;
