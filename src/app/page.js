import React from 'react';
// Import the colleges component if it's in a separate file
import Colleges from '../components/colleges'; // Adjust this path if needed
import Activities from '../components/activities';
export default function Home() {
    // const [showActivities, setShowActivities] = useState(false);
  return (

      <main>
        {/*<Colleges />*/}
        <Activities/>

      </main>

  );
}