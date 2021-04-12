import GeneralForm from './components/General';
import EducationForm from './components/Education';
import PracticalForm from './components/Practical';

function App() {
  return (
    <div className="main">
      <h1 className="main-heading">CV Application</h1>
      <GeneralForm />
      <EducationForm />
      <PracticalForm heading="Practical"/>
      <PracticalForm />
      <PracticalForm />
    </div>
  );
}

export default App;
