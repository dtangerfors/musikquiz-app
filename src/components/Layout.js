import * as React from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

export const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/pon8cms.css" />
    </Helmet>
    <div className="flex flex-col relative min-h-screen">
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  </>
);
