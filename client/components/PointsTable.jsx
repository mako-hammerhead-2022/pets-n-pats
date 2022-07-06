import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export default function PointsTable() {
  return (
    <div alt='The points table'>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Pet Leaderboard</TableCaption>
          <Thead>
            <Tr>
              <Th>Pet Image</Th>
              <Th>Pet Name</Th>
              <Th>Score</Th>
              <Th>Species</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Foo</Td>
              <Td>Bar</Td>
              <Td isNumeric>25</Td>
              <Td>Cat</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}
