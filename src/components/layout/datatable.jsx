import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const DataTable = ({ columns, data }) => {
  return (
    <div className="container mx-auto py-10">
      <Table className="border border-gray-300 rounded-xl p-4 shadow-md z-30">
        <TableHeader>
          <TableRow>
            {columns.map((column, index) => (
              <TableHead key={index}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((row) => (
              <TableRow key={row._id}>
                {columns.map((column) => (
                  <TableCell key={`${row._id}-${column.accessorKey}`} className="text-gray-600 rounded-lg">
                    {column.cell 
                      ? column.cell({ row })
                      : row[column.accessorKey]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center rounded-lg">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;