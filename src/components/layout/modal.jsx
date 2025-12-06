import { CircleX } from 'lucide-react';

const fields = [
  { label: "Name", key: "name", value: "title" },
  { label: "Designation", key: "designation" },
  { label: "Address", key: "townVillage" },
  { label: "District", key: "district" },
  { label: "Pincode", key: "pincode" },
  { label: "Expert In Subject", key: "expertInSubject" },
  { label: "Degree", key: "degrees", isTextArea: true },
  { label: "Name Of The Program", key: "nameOfTheCourse" },
  { label: "Specialization", key: "specialization" },
  { label: "Affiliated University", key: "affiliatedUniversity" },
  { label: "Affiliated College Campus", key: "affiliatedCollegeCampus" },
  { label: "Duration of Program", key: "duration" },
  { label: "Mode Of Education", key: "modeOfEducation" },
  { label: "Gender", key: "gender" },
  { label: "Programme", key: "programme" },
  { label: "Name Of The Institution", key: "nameOfTheInstitution" },
  { label: "Faculty", key: "courseFaculty", isTextArea: true },
  { label: "Department Name", key: "departmentName" },
  { label: "Certifications", key: "certifications" },
  { label: "Publications Book", key: "publicationsBook", isTextArea: true },
  { label: "Publications Paper", key: "publicationsPaper", isTextArea: true },
  { label: "Email", key: "email" },
  { label: "Contact Number", key: "contactNumber" },
  { label: "Image", key: "image", isImage: true },
];

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full md:w-9/12 lg:w-2/3 max-h-[85vh] overflow-y-auto relative">
        
       
        <div className="flex justify-between items-center sticky top-0 z-20 bg-white p-5 border-b">
          <h2 className="text-xl font-bold text-[#790005]">Faculty Details</h2>
          <CircleX
            className="cursor-pointer text-gray-600 hover:text-black"
            onClick={onClose}
          />
        </div>

      
        {data.image && (
          <div className="w-full h-56 md:h-72 overflow-hidden">
            <img
              src={data.image}
              alt={data.name || "Faculty Image"}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field, index) => (
            data[field.key] && (
              <div key={index} className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-1">
                  {field.label}
                </label>

                {field.isImage ? null : field.isTextArea ? (
                  <div className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 overflow-hidden">
                    <ul className="list-disc pl-5 space-y-1 text-[#A52A2A]">
                      {data[field.key]
                        .split(/[;,]/)
                        .filter((entry) => entry.trim() !== "")
                        .map((entry, idx) => (
                          <li key={idx}>{entry}</li>
                        ))}
                    </ul>
                  </div>
                ) : (
                  <input
                    type="text"
                    disabled
                    value={field.value ? `${data[field.value]} ${data[field.key]}` : data[field.key]}
                    className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-900"
                  />
                )}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
