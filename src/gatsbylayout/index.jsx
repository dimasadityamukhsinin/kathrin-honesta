import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from '../components/cursor/index';

export default function GatsbyLayout(props) {
  return (
    <div asscroll-container=''>
      {/* <CustomCursor /> */}
      {props.children}
    </div>
  );
}
