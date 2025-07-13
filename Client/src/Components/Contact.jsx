import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
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
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/a`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error("Server returned:", errorText);
            } else {
                const data = await res.json();
                console.log(data);
            }

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
        <section className="min-h-screen flex items-center justify-center text-gray-700 dark:text-gray-300 body-font relative bg-white dark:bg-[#020817] transition-colors duration-300">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
