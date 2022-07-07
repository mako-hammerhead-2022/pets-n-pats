import React from 'react'
import { useTable } from 'react-table'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

export default function PointsTable({ petScores }) {
  const data = petScores
    ? React.useMemo(() =>
        petScores.map((petObject) => {
          return {
            col1: petObject.name,
            col2: petObject.points,
            col3: petObject.animal === 'cat' ? '🐱' : '🐶',
          }
        })
      )
    : []

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1',
      },
      {
        Header: 'Points',
        accessor: 'col2',
      },
      {
        Header: 'Species',
        accessor: 'col3',
      },
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <div alt='The points table'>
      <TableContainer>
        <Table variant='simple' {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup, i) => (
              <Tr key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, j) => (
                  <Th key={`${j}-${i}`} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <Tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, j) => {
                    return (
                      <Td key={j} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </Td>
                    )
                  })}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}
