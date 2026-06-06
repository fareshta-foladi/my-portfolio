import Header from "../components/Header";
import Profile from "../components/Profile";

function Home() {
  return (
    <>
      <Header message="Welcome To My Portfolio" />

      <Profile
        image="https://via.placeholder.com/200"
        title="Fareshta Foladi"
        bio="Computer Science Student"
      />
    </>
  );
}

export default Home;