import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Single from './components/SingleArticle';
import * as serviceWorker from './serviceWorker';
import SingleArticle from './components/SingleArticle';

const Home = () => {
	return <h1>THIS IS THE HOME PAGE</h1>
};

const About = () => {
	return <h1>THIS IS THE ABOUT PAGE</h1>
};

ReactDOM.render(
    <BrowserRouter>
      <div>
				<Navbar />
				<Route exact path="/" component={Welcome} />
				<Route path="/about" component={About} />
				<Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/article/:slug" component={SingleArticle} />
        <Route path="/articles/create" component={CreateArticle} />
        <Footer />
			</div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
