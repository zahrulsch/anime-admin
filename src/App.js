import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/register'
import { WithAuth, WithoutAuth } from './components/auth'
import AnimeListPanel from './components/animeList'
import AddAnimePanel from './components/addAnime'
import AddCategoryPanel from './components/addNewCategory'
import CategoryListPanel from './components/categoryList'

export default function MyApp () {
  return (
    <Routes>
      <Route path='/register'
        element={
          <WithoutAuth>
            <Register />
          </WithoutAuth>
        }
      />
      <Route path='/login'
        element={
          <WithoutAuth>
            <Login />
          </WithoutAuth>
        }
      />
      <Route path='/'
        element={
          <WithAuth>
            <Home />
          </WithAuth>
        }
      >
        <Route path='animes' element={ <AnimeListPanel /> } />
        <Route path='add-anime' element={ <AddAnimePanel /> } />
        <Route path='add-category' element={ <AddCategoryPanel /> } />
        <Route path='categories' element={ <CategoryListPanel />} />
      </Route>
    </Routes>
  )
}