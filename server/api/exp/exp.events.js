/**
 * Exp model events
 */

'use strict';

import {EventEmitter} from 'events';
import Exp from './exp.model';
var ExpEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ExpEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Exp.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ExpEvents.emit(event + ':' + doc._id, doc);
    ExpEvents.emit(event, doc);
  };
}

export default ExpEvents;
