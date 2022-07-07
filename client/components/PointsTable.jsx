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

export default function PointsTable({ petScores }) {
  const firstAnimal = petScores[0]
  return (
    <div alt='The points table'>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Pet Leaderboard</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Points</Th>
              <Th>Species</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{firstAnimal.name}</Td>
              <Td isNumeric>{firstAnimal.points}</Td>
              <Td>{firstAnimal.animal}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}
