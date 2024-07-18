import React from 'react';
// Import the colleges component if it's in a separate file
import Colleges from './colleges/page'; // Adjust this path if needed
import HomeScreen from './home/page';
export default function Home() {
    // const [showActivities, setShowActivities] = useState(false);
  return (
      <main>
        <HomeScreen/>
      </main>
  );
}