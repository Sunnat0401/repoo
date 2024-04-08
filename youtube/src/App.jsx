import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import GussiPage from './Pages/GussiPage/GussiPage'
import NaraPages from './Pages/NaraPages/NaraPages'
import Belle from './Pages/Belle/Belle'
import Eunic from './Pages/Eunic/Eunic'
import Emma from './Pages/Emma/Emma'
import Beah from './Pages/Beah/Beah'
import Trending from './Pages/Trending/Trending'
import Subscriptions from './Pages/Subscriptions/Subscriptions'
import Library from './Pages/Library/Library'
import History from './Pages/History/History'
import WiteLater from './Pages/Watch-Later/Watch-Later'
import Favourites from './Pages/Favorites/Favorites'
import LikedVideo from './Pages/Liked-video/Liked-video'
import Musics from './Pages/Musics/Musics'
import Games from './Pages/Games/Games'

function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/gussipage' element={<GussiPage/>} />
      <Route path='nara' element={<NaraPages/>} />
      <Route path="/belle" element={<Belle/>}/>
      <Route path='eunic' element={<Eunic/>} />
      <Route path='/emma' element={<Emma/>} />
      <Route path="/beah"  element={<Beah/>}/>
      <Route path='/trending' element={<Trending/>} />
      <Route path='/subscriptions' element={<Subscriptions/>} />
      <Route path="/library" element={<Library/>} />
      <Route path="/history" element={<History/>} />
      <Route path="/watch" element={<WiteLater/>} />
      <Route path="/favorite" element={<Favourites/>} />
      <Route path="/like" element={<LikedVideo/>} />
      <Route path="/music" element={<Musics/>} />
      <Route path="/game" element={<Games/>} />
    </Routes>
    </div>
  )
}

export default App
