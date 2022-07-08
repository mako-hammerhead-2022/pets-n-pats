import React from 'react'
import { useTable, usePagination, useSortBy } from 'react-table'
import { useSelector } from 'react-redux'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import './PointsTable.css'

export default function PointsTable() {
  const petScores = useSelector((state) => state.leaderboard.leaderboard)

  const data = React.useMemo(
    () =>
      petScores.map((petObject, i) => {
        const images = JSON.parse(petObject.imageUrl)
        return {
          // col1: [
          //   <img
          //     key={`image${i}`}
          //     src={`${images[0]}`}
          //     width='20px'
          //     height='20px'
          //   />,
          //   petObject.name,
          // ],
          col1: (
            <div className='pet-cell'>
              <img
                key={`image${i}`}
                src={`${images[0]}`}
                width='80px'
                height='80px'
              />{' '}
            </div>
          ),
          col2: petObject.name,
          col3: petObject.points,
          col4: petObject.animal === 'cat' ? '🐱' : '🐶',
        }
      }),
    [petScores]
  )
  // useCallback, useMemo, useEffect

  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'col1',
      },
      {
        Header: 'Name',
        accessor: 'col2',
      },
      {
        Header: 'Points',
        accessor: 'col3',
      },
      {
        Header: 'Species',
        accessor: 'col4',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  )

  return (
    <div alt='The points table' className='flex'>
      <TableContainer>
        <Table variant='simple' {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup, i) => (
              <Tr key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, j) => (
                  <Th
                    key={`${j}-${i}`}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
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
      <div className='pagination'>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <span className='page-number'>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
      </div>
    </div>
  )
}
