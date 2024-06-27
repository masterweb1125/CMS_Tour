// components/AnimatedNumber.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedNumber = ({ end }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        let interval;

        if (currentNumber < end) {
            interval = setInterval(() => {
                setCurrentNumber(prevNumber => prevNumber + 1);
            }, 30); // Adjust the speed of the animation here
        }

        return () => clearInterval(interval);
    }, [currentNumber, end]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{ fontSize: '2em' }} // Adjust styling as needed
        >
            {currentNumber}
        </motion.div>
    );
};

export default AnimatedNumber;
