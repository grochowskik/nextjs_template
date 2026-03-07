import { Table } from '@/components';

export function DashboardTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {['aa', 'nn']?.map((t, i) => (
          <Table.Row key={i}>
            <Table.Cell>{t}</Table.Cell>
            <Table.Cell>{t}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
