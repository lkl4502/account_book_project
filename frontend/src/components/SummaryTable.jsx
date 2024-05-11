import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import styled from "styled-components";

const SummaryStyles = styled.div`
  padding: 1rem;
  table {
    width: 75%;
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

function SummaryTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <SummaryStyles>
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
    </SummaryStyles>
  );
}

export default SummaryTable;
