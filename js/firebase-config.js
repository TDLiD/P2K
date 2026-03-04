// Firebase SDK import (CDN 방식)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/10.x/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://jakor-52390-default-rtdb.firebaseio.com/",
    // projectSettings에서 나머지 키값(apiKey 등)을 복사해 넣으세요.
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue, push, set };