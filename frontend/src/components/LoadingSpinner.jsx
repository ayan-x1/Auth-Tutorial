import { motion } from "framer-motion";

const LoadingSpinner = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black flex items-center justify-center relative overflow-hidden'>
			{/* Floating Background Shapes */}
			<motion.div
				className="absolute rounded-full bg-yellow-500 opacity-20 blur-xl"
				style={{
					width: '300px',
					height: '300px',
					top: '10%',
					left: '10%',
				}}
				animate={{
					y: [0, -20, 0],
					x: [0, 10, 0],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			
			<motion.div
				className="absolute rounded-full bg-emerald-500 opacity-15 blur-xl"
				style={{
					width: '200px',
					height: '200px',
					top: '60%',
					right: '10%',
				}}
				animate={{
					y: [0, 15, 0],
					x: [0, -15, 0],
					scale: [1, 0.9, 1],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2,
				}}
			/>
			
			<motion.div
				className="absolute rounded-full bg-blue-500 opacity-10 blur-xl"
				style={{
					width: '250px',
					height: '250px',
					top: '20%',
					right: '20%',
				}}
				animate={{
					y: [0, -25, 0],
					x: [0, 20, 0],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 4,
				}}
			/>
			
			<motion.div
				className="absolute rounded-full bg-purple-500 opacity-15 blur-xl"
				style={{
					width: '180px',
					height: '180px',
					bottom: '20%',
					left: '20%',
				}}
				animate={{
					y: [0, 20, 0],
					x: [0, -10, 0],
					scale: [1, 0.8, 1],
				}}
				transition={{
					duration: 9,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
			/>

			{/* Loading Spinner */}
			<motion.div
				className='w-16 h-16 border-4 border-t-4 border-t-yellow-500 border-yellow-300 rounded-full relative z-10'
				animate={{ rotate: 360 }}
				transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default LoadingSpinner;