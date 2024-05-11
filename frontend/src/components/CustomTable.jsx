import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import styled from "styled-components";

const Styles = styled.div`
  padding: 1rem;

  table {
    table-layout: fixed;
    width: 75%;
    margin-top: 30px;
    border-spacing: 0;
    border: 1px solid lightgray;

    tr:last-child {
      td {
        border-bottom: 0;
      }
    }

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

    th:last-child,
    td:last-child {
      border-right: 0;
    }
  }
`;

function CustomTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Styles>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ width: header.getSize() }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
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
          margin: "10px 0 0 0",
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
