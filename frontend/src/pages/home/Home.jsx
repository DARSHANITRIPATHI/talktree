import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-paddinng backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar/>
        <MessageContainer/>
    </div>
  );
}

export default Home
