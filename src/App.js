import './App.css';
import NavBar from './components/pages/navBar/NavBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Location from './components/pages/Location/Location';
import Alumni from './components/pages/Alumni/Alumni';
import Exam_Timetables from './components/pages/TimeTable/Exam_Timetables'
import News_and_Envents from './components/pages/News/News_and_Events'
import Announcements from './components/pages/Announcements/Announcements'
import Staff from './components/pages/Staff/Staff'
import Community from './components/pages/Community/Community'
import Map from './components/pages/Map/Map'
import PassList from './components/pages/PassList/PassList'
import Departments from './components/pages/Departments/Departments'
import Students from './components/pages/Students/Students'
import Post from './components/pages/Posts/Post';


const App = () => {
  return (
      <div>
        <Router>
          <NavBar />
            <div id="body-content" className="mainApp">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/announcements" component={Announcements} />
                <Route exact path="/news&events" component={News_and_Envents} />
                <Route exact path="/alumni" component={Alumni} />
                <Route exact path="/time_tables" component={Exam_Timetables} />
                <Route exact path="/location" component={Location} />
                <Route exact path="/about" component={About} />

                {/* Side bar routing */}
                <Route exact path="/staff" component={Staff} />
                <Route exact path="/pass_list" component={PassList} />
                <Route exact path="/map" component={Map} />
                <Route exact path="/departments" component={Departments} />
                <Route exact path="/students" component={Students} />
                <Route exact path="/community" component={Community} />

                <Route exact path="/post" component={Post} />

                <Redirect to="/" />
              </Switch>
            </div>
        </Router>
      </div>
  );
}

export default App;
