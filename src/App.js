import Home from './Home';
import { ThemeProvider} from '@material-ui/core';
function App() {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
