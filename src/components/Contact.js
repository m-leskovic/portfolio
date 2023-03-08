import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0}
}

const Contact = () => {
    const values = { name: "", email: "", message: "" };
    const [ formValues, setForm ] = useState(values);
    const [ submit, setSubmit ] = useState(false);
    const [ showMessage, setMessage ] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setForm({...formValues, [name]: value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        setForm(values);
        setSubmit(true);
        setMessage(true);
    }
    useEffect(() => {
        setTimeout(() => {
            setMessage(false);
        }, 4000);
    }, [showMessage]);
    return (
        <LayoutGroup>
            <motion.section id="contact-wrapper" layout>
                <h2 id="questions-title">Leave a message</h2>
                <AnimatePresence>
                    {submit && showMessage && (
                        <motion.p
                            id="success-message"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            Thank you for reaching out!
                        </motion.p>
                    )}
                </AnimatePresence>
                <form onSubmit={handleSubmit}>
                    <div id="form-wrapper">
                        <div id="left-form">
                            <label>First and last name</label>
                            <input
                                type="text"
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                                required
                            />
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div id="right-form">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formValues.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button id="submit-btn" type="submit">Submit</button>
                </form>
            </motion.section>
        </LayoutGroup>
    )
}

export default Contact