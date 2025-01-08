import React, { useState } from 'react';

const MyComponent = () => {
  // הגדרת state עם useState (ה-state הראשוני הוא ערך התחלתי)
  const [count, setCount] = useState(0);

  // פונקציה לעדכון ה-state
  const increment = () => {
   setCount(count + 1);  // עדכון ה-state
  
};

  const increment2 = () => {
    setCount(count - 1);  // עדכון ה-state
  };

  return (
    <div>
      <p>המספר הנוכחי הוא: {count}</p>
      <button onClick={increment}>הוסף 1</button>
      <button onClick={increment2}>הורד 1</button>
    </div>
  );
};

export default MyComponent;