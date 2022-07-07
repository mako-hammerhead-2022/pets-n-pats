import React from 'react'
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
  const animalsWithScores = petScores
    ? petScores.map((petObject, i) => {
        return (
          <Tr key={i}>
            <Td>{petObject.name}</Td>
            <Td isNumeric>{petObject.points}</Td>
            <Td>{petObject.animal === 'cat' ? '🐱' : '🐶'}</Td>
          </Tr>
        )
      })
    : []

  return (
    <div alt='The points table'>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Points</Th>
              <Th>Species</Th>
            </Tr>
          </Thead>
          <Tbody>{animalsWithScores}</Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}
