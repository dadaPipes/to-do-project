// Utils/generateUUID.js

export default function generateUUID() {
  return '_' + Math.random().toString(36).substring(2, 11);
} 