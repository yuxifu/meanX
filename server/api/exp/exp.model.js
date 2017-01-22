'use strict';

import mongoose from 'mongoose';

var ExpSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Exp', ExpSchema);
