import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../sass/style.scss';

class App extends Component {
    render() {
        return <div>działa :)</div>;
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
// export default App;
