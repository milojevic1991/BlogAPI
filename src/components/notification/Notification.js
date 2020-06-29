import React from 'react';
import PropTypes from 'prop-types';
import classes from './Notification.module.css';
import Title from '../common/title/Title';

import { motion, AnimatePresence } from 'framer-motion';

/**
 * Notification component.
 */

const Notification = ({ message, closeNotification }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={classes.notificationWrapp}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Title className={classes.notificationTitle} title={message} />
        <button
          onClick={closeNotification}
          className={classes.notificationCloseBtn}
        >
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
  closeNotification: PropTypes.func,
};
