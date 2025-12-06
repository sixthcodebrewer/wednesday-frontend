export default function CardSkeleton(){
    return (
        <>
            <div className="bg-white">
            <div className="h-32 w-full bg-gray-300"></div> {/* Placeholder for the image */}
            <div className="p-4">
                <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div> {/* Placeholder for title */}
                <div className="h-3 bg-gray-300 rounded mb-2 w-1/2"></div> {/* Placeholder for description */}
                <div className="h-3 bg-gray-300 rounded mb-2 w-1/4"></div> {/* Placeholder for distance */}
                <div className="h-3 bg-gray-300 rounded mb-2 w-1/3"></div> {/* Placeholder for additional details */}
            </div>
            </div>
        </>
          
    );
};

export function TableSkeleton(){
    return (
        <div className="rounded-md container mx-auto m-5">
            <div className="animate-pulse">
                <div className="flex flex-row space-x-4 mb-2"> {/* Flex container for headers */}
                    <div className="bg-gray-300 h-8 w-1/4 rounded"></div> {/* Placeholder for header */}
                    <div className="bg-gray-300 h-8 w-1/4 rounded"></div> {/* Placeholder for header */}
                    <div className="bg-gray-300 h-8 w-1/4 rounded"></div> {/* Placeholder for header */}
                    <div className="bg-gray-300 h-8 w-1/4 rounded"></div> {/* Placeholder for header */}
                </div>
                
                <div className="border-t border-gray-300"></div> {/* Divider line */}
                
                {Array.from({ length: 10}).map((_, index) => ( // Placeholder for 5 rows
                    <div key={index} className="flex justify-between py-2 space-x-4">
                        <div className="bg-gray-300 h-6 w-1/4 rounded"></div> {/* Placeholder for cell */}
                        <div className="bg-gray-300 h-6 w-1/4 rounded"></div> {/* Placeholder for cell */}
                        <div className="bg-gray-300 h-6 w-1/4 rounded"></div> {/* Placeholder for cell */}
                        <div className="bg-gray-300 h-6 w-1/4 rounded"></div> {/* Placeholder for cell */}
                    </div>
                ))}
            </div>
        </div>
    );
}