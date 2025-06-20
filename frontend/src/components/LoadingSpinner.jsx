import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
	return (
		<div className='min-h-screen bg-gradient-radial from-black via-gray-900 to-yellow-900 flex items-center justify-center'>
			<motion.div
				className='w-16 h-16 border-4 border-t-4 border-t-yellow-400 border-yellow-100 rounded-full'
				animate={{ rotate: 360 }}
				transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default LoadingSpinner;
