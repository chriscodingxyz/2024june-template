"use client";

import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuButton } from "./MenuButton";

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const menuButtonVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function Header() {
  return (
    <header className="px-4 py-2 flex items-center justify-between animate shadow-lg border-b border-primary/10 bg-background">
      <div className="max-w-3xl flex justify-between items-center mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={avatarVariants}
        >
          <Avatar className="border border-primary border-solid">
            <AvatarImage src="/punk1534.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </motion.div>
        <h1 className="text-3xl font-extrabold flex items-center justify-between text-primary">
          <motion.div initial="hidden" animate="visible" className="flex">
            <motion.span
              variants={textVariants}
              transition={{ delay: 0.5 }}
              className=""
            >
              chriscoding.
            </motion.span>
            <motion.span
              variants={textVariants}
              transition={{ delay: 1 }}
              className=""
            >
              x
            </motion.span>
            <motion.span
              variants={textVariants}
              transition={{ delay: 1.5 }}
              className=""
            >
              y
            </motion.span>
            <motion.span
              variants={textVariants}
              transition={{ delay: 2 }}
              className=""
            >
              z
            </motion.span>
          </motion.div>
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={menuButtonVariants}
          className="flex-center"
        >
          <MenuButton />
        </motion.div>
        {/* <ModeToggle /> */}
      </div>
    </header>
  );
}
