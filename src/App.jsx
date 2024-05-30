import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Register from './Register';

const App = () => {
  const history = useHistory();

  useEffect(() => {
    const button = document.getElementById('register-btn');
    if (button) {
      button.addEventListener('click', () => {
        // Yeni pencere açarak yönlendirme
        const url = `${window.location.origin}/register`;
        window.open(url, '_blank');
      });
    }
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;