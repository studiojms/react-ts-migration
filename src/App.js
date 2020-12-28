import Button from './components/Button';
import Title from './components/Title';

const App = () => (
  <>
    <Title title="Test" />
    <Button onClick={() => console.log('click')}>Click</Button>
  </>
);

export default App;
