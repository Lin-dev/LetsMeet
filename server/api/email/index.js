'use strict';

import express from 'express';
import { ownerNotification, sendInvite } from './email.controller';

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.status(403).send('Authentiation required.');
};

router.post('/ownerNotification', isAuthenticated, ownerNotification);
router.post('/sendInvite', isAuthenticated, sendInvite);

module.exports = router;
