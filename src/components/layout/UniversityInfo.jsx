import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { LinkIcon } from 'lucide-react';
import Loading from "../../assets/loading_inside.gif"

// JSON structure for fields
const fields = [
  { label: "Type of Institution", value: "typeOfInstitution" },
  { label: "Contact Details", value: "contactEmailId" },
  { label: "District", value: "district" },
  { label: "State", value: "stateUT" },
  { label: "Country", value: "country" },
  { label: "Established Year", value: "establishedYear" },
  { label: "Accreditions", value: "accreditions" },
  { label: "Affiliated University", value: "affiliatedUniversity" }
];

const UniversityInfo = ({ universityDetails }) => {
  console.log(universityDetails, "universityDetails in UniversityInfo");
  if (!universityDetails || Object.keys(universityDetails).length === 0) {
    return (
      <div className="flex flex-row justify-between align-middle">
        <img src={Loading} alt="Loading" />
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="relative z-10 p-1">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 mt-2">{universityDetails?.nameOfTheInstitution}</h1>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 pb-2 ">Institution Details</h2>
          <div className="color-gray-700">
            <a href={universityDetails?.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-2 text-white rounded-full">
              <LinkIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className='grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
          {fields.map((field, index) => (
            <div className='grid w-full max-w-sm items-center' key={index}>
              <Label htmlFor={field.value} className="text-gray-700 pb-1">{field.label}</Label>
              <Input
                value={universityDetails?.[field.value] ? universityDetails?.[field.value] : "N/A"} 
                disabled
                className="text-[#A52A2A] !opacity-100 z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
      );
};

      export default UniversityInfo; 