
import './App.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
import CarouselGrid from './CarouselGrid';
import TrendingCommunities from './TrendingCommunities';
import RedditFeed from './RedditFeed';


function App() {
  return (
    <div className="mainContainer">
       <NavBar/>
       <div className="sideContent">
        <SideBar/>
       <div className="mainContent"> 
          <CarouselGrid/> 
          <div className="feedTrendingContent">
            <RedditFeed/>
            <TrendingCommunities/>
          </div>
         </div>
       </div>   
    </div>
  );
}

export default App;
