import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import dummy_university from "../../assets/dummy_university.svg";
import { fetchScholars } from "../../services/institutionService";
import { useScholar } from "../layout/Context/scholarContext";
import Modal from "../modal";
import CardSkeleton from "./Common/skeleton";

const FacultyCard = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const scholarName = useScholar();

  const { data, isLoading, error } = useQuery({
    queryKey: ["scholars"],
    queryFn: fetchScholars,
  });

  useEffect(() => {
    if (data?.expertInfo) {
      const filtered = data.expertInfo.filter((scholar) =>
        scholar.name
          ?.toLowerCase()
          .includes(scholarName.scholar?.toLowerCase() || "")
      );
      setFilteredData(filtered);
    }
  }, [data, scholarName.scholar]);

  const openModal = (faculty) => setSelectedFaculty(faculty);
  const closeModal = () => setSelectedFaculty(null);

  return (
    <>
      <hr className="border-t border-gray-200 m-8" />

      {/* Debug Button to confirm modal works */}
      {/* <button
        onClick={() => setSelectedFaculty(filteredData[0])}
        className="p-2 bg-blue-500 text-white rounded m-4"
      >
        Test Modal
      </button> */}

      <div className="flex flex-wrap justify-center gap-4 px-4 mb-8">
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => <CardSkeleton key={i} />)
          : error
          ? <div>Error fetching data</div>
          : filteredData.map((faculty) => (
              <div
                key={faculty._id}
                className="w-full sm:w-3/12 cursor-pointer"
                onClick={() => openModal(faculty)} 
              >
                <Card className="flex flex-col h-80 overflow-hidden rounded-xl shadow-md hover:bg-[#790005] hover:text-white transition-all duration-200">
                  <div className="h-40 w-full p-1">
                    <img
                      src={faculty.image || dummy_university}
                      alt={faculty.name}
                      className="h-full w-full object-cover rounded-xl"
                    />
                  </div>

                  <CardContent className="flex-1 p-4 overflow-hidden">
                    <div className="flex justify-between items-center text-gray-600 text-sm">
                      <div className="flex items-center truncate">
                        <MapPin className="h-4 w-4 mr-1 text-[#790005]" />
                        {faculty.townVillage}, {faculty.district}
                      </div>
                      <div>0Km</div>
                    </div>
                    <h2 className="text-lg font-bold text-gray-700 truncate">
                      {faculty.name}
                    </h2>
                    <p className="text-gray-500 text-sm truncate">
                      {faculty.designation}
                    </p>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center px-4 py-3 border-t h-12">
                    <span className="font-medium text-gray-600">Know More</span>
                    <div className="rounded-full p-2 border border-[#790005] bg-[#790005] text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
      </div>

      
      <Modal
        isOpen={!!selectedFaculty}
        onClose={closeModal}
        data={selectedFaculty || {}}
      />
    </>
  );
};

export default FacultyCard;
