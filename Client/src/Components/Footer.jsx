import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/a", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (data.success) {

                // alert("✅ Message sent successfully!");
                toast.success('Message sent successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log("Preview URL:", data.previewUrl);
                setFormData({ name: "", email: "", message: "" });
            } else {
                // alert("❌ Failed to send message.");
                toast.warning('Failed to send message.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (err) {
            console.error("Error:", err);
            // alert("❌ Something went wrong.");
            toast.warning('Something went wrong.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <section className="text-gray-700 dark:text-gray-300 body-font relative bg-white dark:bg-[#020817] transition-colors duration-300">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="title-font text-3xl sm:text-4xl font-bold mb-4 text-black dark:text-white">Let's Connect</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">Ready to bring your ideas to life? Let's start a conversation.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-black dark:text-white">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                                    className="w-full text-black dark:text-white bg-gray-100 dark:bg-[#030e27] bg-opacity-50 rounded border border-gray-300 dark:border-[#181f2c] focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-black dark:text-white">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                                    className="w-full text-black dark:text-white bg-gray-100 dark:bg-[#030e27] bg-opacity-50 rounded border border-gray-300 dark:border-[#181f2c] focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-black dark:text-white">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                    className="w-full text-black dark:text-white bg-gray-100 dark:bg-[#030e27] bg-opacity-50 rounded border border-gray-300 dark:border-[#181f2c] focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button onClick={handleSubmit}
                                className="flex mx-auto text-white font-bold py-2 px-8 focus:outline-none rounded text-lg transition-colors">
                                <lord-icon
                                    src="https://cdn.lordicon.com/gisvawms.json"
                                    trigger="hover"
                                    style={{ width: "90px", height: "60px" }}>
                                </lord-icon>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 w-full pt-8 mt-8 border-t border-gray-300 dark:border-gray-700 text-center">
                            <a href='' className="text-indigo-500">abdullaabdulraoof66@gmail.com</a>
                            <span className="inline-flex mt-4">
                                <a className="text-gray-500 dark:text-gray-400">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500 dark:text-gray-400">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500 dark:text-gray-400">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
