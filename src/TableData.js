import { useEffect, useState } from "react";
import { StyledTableData } from "./TableDataStyle";
const TableData = () => {
  const [newRows, setNewRows] = useState([
    { sno: 1, description: "", qty: "", rate: "", amount: "" },
  ]);
  const addNewRow = () => {
    setNewRows([
      ...newRows,
      {
        sno: newRows.length + 1,
        description: "",
        qty: "",
        rate: "",
        amount: "",
      },
    ]);
  };
  // const handleRowBlur = (index) => {
  //   const newRow = newRows[index];
  //   if (newRow.description && newRow.qty && newRow.rate) {
  //     setNewRows([...newRow]);
  //     setNewRows(newRow.filter((_, i) => i !== index));
  //   }
  // };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRow = [...newRows];
    updatedRow[index][name] = value;

    //amount condition
    if (name === "qty " || name === "rate") {
      const qty = parseFloat(updatedRow[index].qty) || 0;
      const rate = parseFloat(updatedRow[index].rate) || 0;
      updatedRow[index].amount = qty * rate;
    }
    setNewRows(updatedRow);
  };

  const handleDelete = (sno) => {
    if (sno > 0) {
      if (window.confirm("Are you sure you want to delete this row?")) {
        const updatedRows = newRows.filter((row) => row.sno !== sno);
        setNewRows(updatedRows);
      }
    }
  };

  const totalAmount = newRows.reduce(
    (acc, row) => acc + parseFloat(row.amount || 0),
    0
  );
  const lastSno = newRows.length > 0 ? newRows[newRows.length - 1].sno + 1 : 0;

  return (
    <StyledTableData>
      <table className="center">
        <thead>
          <tr>
            <td>S.NO</td>
            <td>DESCRIPTION</td>
            <td>QTY</td>
            <td>RATE</td>
            <td>AMOUNT</td>
            <td style={{ display: "none", border: "none" }}></td>
          </tr>
        </thead>
        <tbody>
          {newRows.map((row, index) => (
            <tr key={index}>
              <td>{row.sno}</td>
              <td style={{ width: "56%" }}>
                <textarea
                  name="description"
                  value={row.description}
                  onChange={(e) => {
                    handleInputChange(index, e);
                  }}
                />
              </td>
              <td>
                <textarea
                  type="text"
                  name="qty"
                  value={row.qty}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <textarea
                  type="text"
                  name="rate"
                  value={row.rate}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <textarea
                  type="text"
                  name="amount"
                  value={row.amount}
                  readOnly
                />
              </td>
              <div style={{ border: "none" }} className="div-btn">
                <button
                  className="btn"
                  onClick={() => handleDelete(row.sno)}
                  style={{ border: "none", background: "white" }}
                >
                  ❌
                </button>
              </div>
            </tr>
          ))}
          <tr>
            <td>{lastSno}</td>
            <td colSpan="3" style={{ textAlign: "right" }}>
              Total:
            </td>
            <td>{totalAmount}</td>
          </tr>
        </tbody>
      </table>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          addNewRow();
        }}
        className="add-new"
      >
        ➕ Add New Row
      </a>
    </StyledTableData>
  );
};

export default TableData;
