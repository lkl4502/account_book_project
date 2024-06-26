import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import styled from "styled-components";

const Styles = styled.div`
  table {
    width: 75%;
    table-layout: fixed;
    margin-top: 30px;
    border-spacing: 0;
    border: 1px solid lightgray;
    border-collapse: collapse;

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      text-align: center;
      border-bottom: 1px solid lightgray;
      border-right: 1px solid lightgray;
    }

    th {
      background-color: #eee;
    }
  }
`;

function CustomTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Styles>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ width: header.getSize(), verticalAlign: "middle" }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  <span style={{ verticalAlign: "middle" }}>
                    {
                      {
                        asc: <FaSortUp />,
                        desc: <FaSortDown />,
                      }[header.column.getIsSorted()]
                    }
                    {header.column.getCanSort() &&
                    !header.column.getIsSorted() ? (
                      <FaSort />
                    ) : null}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "20px 0 0 0",
        }}
      >
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          {"<"}
        </button>

        <div style={{ margin: "0 10px" }}>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>

        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          {">"}
        </button>
      </div>
    </Styles>
  );
}

export default CustomTable;
