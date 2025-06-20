import { motion } from "framer-motion";

const LoadingSpinner = () => {
	return (
		<div className='min-h-screen bg-gradient-to-r from-black via-gray-900 to-yellow-600 flex items-center justify-center relative overflow-hidden'>
			{/* Loading Spinner */}
			<motion.div
				className='w-16 h-16 border-4 border-t-4 border-t-yellow-500 border-yellow-300 rounded-full'
				animate={{ rotate: 360 }}
				transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default LoadingSpinner;