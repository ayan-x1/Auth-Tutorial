import React from "react";
import { motion } from "framer-motion";
import FloatingShape from "./FloatingShape";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-yellow-600 flex items-center justify-center relative overflow-hidden">
      {/* Floating background shapes */}
      <FloatingShape
        color="bg-yellow-500"
        size="w-64 h-64"
        top="10%"
        left="5%"
        delay={0}
        blur="blur-3xl"
      />
      <FloatingShape
        color="bg-yellow-300"
        size="w-32 h-32"
        top="70%"
        left="80%"
        delay={3}
        blur="blur-2xl"
      />
      <FloatingShape
        color="bg-black"
        size="w-48 h-48"
        top="40%"
        left="45%"
        delay={1}
        blur="blur-xl"
      />

      {/* Spinner */}
      <motion.div
        className="w-16 h-16 border-4 border-t-4 border-t-yellow-500 border-yellow-300 rounded-full z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;
