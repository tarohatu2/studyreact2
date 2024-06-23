import { Header } from '../viewparts/Header'
import { SideMenu } from '../viewparts/SideMenu'
import { Outlet } from 'react-router-dom'

export const MainPage = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <header className='ml-6'>
        <Header />
      </header>
      <div className="flex flex-row-reverse justify-end gap-6 mt-6">
        <main className="w-5/6 mr-6">
          <Outlet />
        </main>
        <aside className="w-1/6 ml-6">
          <SideMenu />
        </aside>
      </div>
    </div>
  )
}