import { useEffect, useState } from 'react';
import DummyTable from '../dummtable';
import { TableSkeleton } from '../Common/skeleton';
import Modal from '../modal';

const ScholarData = ({ data, isLoading, error }) => {
  const [columns, setColumns] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null); // null instead of {}

  useEffect(() => {
    if (data) {
      setColumns([
        {
          header: "Name",
          accessorKey: "name",
          cell: ({ row }) => {
            const { title, name } = row.original;
            return `${title ? title + "." : ""} ${name}`;
          },
        },
        {
          header: "Designation",
          accessorKey: "designation",
        },
        {
          header: "Affiliated University",
          accessorKey: "affiliatedUniversity",
        },
        {
          header: "Expertise Subject",
          accessorKey: "expertInSubject",
        },
        {
          header: "Learn More",
          cell: ({ row }) => (
            <button
              className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
              onClick={() => setSelectedRowData(row.original)} 
            >
              View
            </button>
          ),
        },
      ]);
    }
  }, [data]);

  if (isLoading) return <TableSkeleton />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <hr className="border-t border-gray-200 m-8" />

      <DummyTable columns={columns} data={data || []} />

    
      <Modal
        isOpen={!!selectedRowData} 
        onClose={() => setSelectedRowData(null)}
        data={selectedRowData || {}}
      />

      {/* Debug Test Button
       <button
        onClick={() => setSelectedRowData(data?.[0] || {})}
        className="p-2 bg-blue-500 text-white rounded m-4"
      >
        Test Modal
      </button>  */}
    </>
  );
};

export default ScholarData;
