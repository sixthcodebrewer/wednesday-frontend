import { Facebook, Twitter, Linkedin } from "lucide-react"
import { Link } from "wouter";
import female from "../../assets/female.gif";
import male from "../../assets/male.gif";
import { useReducer } from 'react';

function AboutDetails() {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };

    // Define the reducer function
    const formReducer = (state, action) => {
        switch (action.type) {
            case 'SET_FIELD':
                return {
                    ...state,
                    [action.field]: action.value,
                };
            case 'RESET':
                return initialState;

            default:
                return state;
        }
    };

    // Use useReducer to manage form state
    const [state, dispatch] = useReducer(formReducer, initialState);

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        dispatch({ type: 'SET_FIELD', field: id, value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Process the form data (e.g., send it to an API or log it)
        // Optionally, reset the form fields
        dispatch({ type: 'RESET' });
    };

    return (
        <>
            {/* Main Content */}
            <main className="flex-grow py-12 bg-[#f5f5f5e5]">
                <section className="py-12 px-12">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <h1 className="text-3xl font-bold mb-8">About Sam-Shiksha</h1>
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-[#333333] mb-4">
                                Welcome to Bhāratīya-Jñāna-Praṇālī-Sandhānam. Our web-app is dedicated to connect to genuine learners
                                and teachers. This project represents our commitment to excellence and collaboration.
                            </p>
                        </div>
                    </div>
                    <hr className="my-6 border-t border-[#303031]" /> {/* Adjust styles as needed */}
                </section>
                {/* Project Information */}
                <section className="py-12 px-6 bg-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-8">Project Information</h2>
                        <p className="max-w-4xl mx-auto mb-4 text-[#333333]">
                            This platform is aimed at collating the information from institutes, which impart education in Samskrita,
                            its allied languages, and Samskrita shastras such as Vyakarana, Nyaya, Vedanta, Mimamsa, Ayurveda, Ganita,
                            Jyotish, and so on.
                        </p>
                        <p className="max-w-4xl mx-auto text-[#333333]">
                            This is a joint effort of Karnataka Samskrita University, Bengaluru and Central Samskrita University, New
                            Delhi.
                        </p>
                    </div>
                </section>

                {/* Advisors Section 1 */}
                <section className="py-12 px-6  bg-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-12">Advisors</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="flex flex-col items-center">
                                <div className="relative w-36 h-36 mb-4">
                                    <img
                                        src={male}
                                        alt="Prof Shrinivasa Varakhedi"
                                        width={144}
                                        height={144}
                                        className="rounded-full object-cover"
                                        style={{ backgroundColor: "#ffe3e6" }}
                                    />
                                </div>
                                <p className="text-sm text-[#59595a] mb-1">Vice-Chancellor, Central Samskrita University, New Delhi</p>
                                <h3 className="text-lg font-semibold mb-3">Prof Shrinivasa Varakhedi</h3>
                                <div className="flex gap-4">
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Facebook size={18} />
                                    </Link>
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Twitter size={18} />
                                    </Link>
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Linkedin size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-36 h-36 mb-4">
                                    <img
                                        src={female}
                                        alt="Prof Ahalya Sharma"
                                        width={144}
                                        height={144}
                                        className="rounded-full object-cover"
                                        style={{ backgroundColor: "#eee9ff" }}
                                    />
                                </div>
                                <p className="text-sm text-[#59595a] mb-1">Vice-Chancellor, Karnataka Samskrita University, Bengaluru</p>
                                <h3 className="text-lg font-semibold mb-3">Prof Ahalya Sharma</h3>
                                <div className="flex gap-4">
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Facebook size={18} />
                                    </Link>
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Twitter size={18} />
                                    </Link>
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Linkedin size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advisors Section 2 */}
                <section className="py-12 px-6 bg-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-12">Principal Investigator</h2>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col items-center">
                                    <div className="relative w-36 h-36 mb-4">
                                        <img
                                            src={female}
                                            alt="Prof. Shivani V"
                                            width={144}
                                            height={144}
                                            className="rounded-full object-cover"
                                            style={{ backgroundColor: "#ffe3e6" }}
                                        />
                                    </div>
                                    <p className="text-sm text-[#59595a] mb-1">Dean and Head of Department, Department of Vyakarana, Lead Principal Investigator </p>
                                    <h3 className="text-lg font-semibold mb-3">Prof. Shivani V</h3>
                                    <div className="flex gap-4">
                                        <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                            <Facebook size={18} />
                                        </Link>
                                        <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                            <Twitter size={18} />
                                        </Link>
                                        <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                            <Linkedin size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>

                {/* Tech Section 1 */}
                <section className="py-12 px-6  bg-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-12">Techinical Team</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="flex flex-col items-center">
                                <div className="relative w-36 h-36 mb-4">
                                    <img
                                        src={male}
                                        alt="Mr Balaji B. G"
                                        width={144}
                                        height={144}
                                        className="rounded-full object-cover"
                                        style={{ backgroundColor: "#ffe3e6" }}
                                    />
                                </div>
                                <p className="text-sm text-[#59595a] mb-1">Technical Consultant</p>
                                <h3 className="text-lg font-semibold mb-3">Mr Balaji B. G</h3>
                                <div className="flex gap-4">
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Facebook size={18} />
                                    </Link>
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Twitter size={18} />
                                    </Link>
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Linkedin size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-36 h-36 mb-4">
                                    <img
                                        src={female}
                                        alt="Prof Ahalya Sharma"
                                        width={144}
                                        height={144}
                                        className="rounded-full object-cover"
                                        style={{ backgroundColor: "#eee9ff" }}
                                    />
                                </div>
                                <p className="text-sm text-[#59595a] mb-1">Technical Consultant</p>
                                <h3 className="text-lg font-semibold mb-3">Dr. Swati Basapur</h3>
                                <div className="flex gap-4">
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Facebook size={18} />
                                    </Link>
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Twitter size={18} />
                                    </Link>
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Linkedin size={18} />
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="relative w-36 h-36 mb-4">
                                    <img
                                        src={female}
                                        alt="Vid. Nagashree"
                                        width={144}
                                        height={144}
                                        className="rounded-full object-cover"
                                        style={{ backgroundColor: "#eee9ff" }}
                                    />
                                </div>
                                <p className="text-sm text-[#59595a] mb-1">Data Facilitator</p>
                                <h3 className="text-lg font-semibold mb-3">Vid. Nagashree </h3>
                                <div className="flex gap-4">
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Facebook size={18} />
                                    </Link>
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Twitter size={18} />
                                    </Link>
                                    <Link href="#" className="text-[#333333] hover:text-[#000000]">
                                        <Linkedin size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feedback Form */}
                <section className="py-12 px-6">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-12">Feedback</h2>
                        <form className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col text-left">
                                <label htmlFor="firstName" className="mb-2 text-[#333333]">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Enter First Name"
                                    value={state.firstName}
                                    onChange={handleInputChange}
                                    className="border border-[#e4e4e7] rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#f0d097]"
                                />
                            </div>

                            <div className="flex flex-col text-left">
                                <label htmlFor="lastName" className="mb-2 text-[#333333]">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Enter Last Name"
                                    value={state.lastName}
                                    onChange={handleInputChange}
                                    className="border border-[#e4e4e7] rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#f0d097]"
                                />
                            </div>

                            <div className="flex flex-col text-left">
                                <label htmlFor="email" className="mb-2 text-[#333333]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your Email"
                                    value={state.email}
                                    onChange={handleInputChange}
                                    className="border border-[#e4e4e7] rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#f0d097]"
                                />
                            </div>

                            <div className="flex flex-col text-left">
                                <label htmlFor="phone" className="mb-2 text-[#333333]">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter Phone Number"
                                    value={state.phone}
                                    onChange={handleInputChange}
                                    className="border border-[#e4e4e7] rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#f0d097]"
                                />
                            </div>

                            <div className="flex flex-col text-left md:col-span-2">
                                <label htmlFor="message" className="mb-2 text-[#333333]">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Enter your Message here..."
                                    value={state.message}
                                    onChange={handleInputChange}
                                    className="border border-[#e4e4e7] rounded p-3 focus:outline-none focus:ring-1 focus:ring-[#f0d097]"
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="bg-[#000000] text-white px-6 py-3 rounded hover:bg-[#262626] transition-colors"
                                >
                                    Send Your Feedback
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default AboutDetails;