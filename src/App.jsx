import Cloud from './components/Cloud';
import Header from './components/Header';
import Live from './components/Live';
import LMS from './components/LMS';
import Route from './components/Route';

const App = () => {
  const showLMS = () => {
    if (window.location.pathname === '/lms') {
      return <LMS />;
    }
  };
  const showCloud = () => {
    if (window.location.pathname === '/cloud') {
      return <Cloud />;
    }
  };
  const showLive = () => {
    if (window.location.pathname === '/live') {
      return <Live />;
    }
  };

  return (
    <div>
      <Header />
      {/* 1 */}
      {/* {showLMS()}
      {showCloud()}
      {showLive()} */}
      
      {/* 2 */}
      <Route path="/lms">
        <LMS />
      </Route>
      <Route path="/cloud">
        <Cloud />
      </Route>
      <Route path="/live">
        <Live />
      </Route>
    </div>
  );
};

export default App;
