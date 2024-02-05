import trainTicket from './assets/trainTicket.png';

const App = () => {

  return(
    <main>
      <h1>Welcome to BookIt - MARS</h1>
      <p>I'm a really cool Frontend project</p>
      <img src={trainTicket} alt="look, we imported an asset!" />
    </main>
  );
};

export default App;
