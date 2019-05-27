/* eslint-disable react/react-in-jsx-scope */
import '../styles/application.scss';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Hello world"
        subtitle="Welcome to my blog. Here's where I write down things I've learnt and things I think are important to share!"
        size="fullheight-with-navbar"
      />
    </div>
  );
}

export default Home;
