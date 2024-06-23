import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { SearchForm } from './SearchForm'

const MainContents = () => {

  const [version, setVersion] = useState(0)

  const handleReset = () => {
    setVersion(version + 1)
  }

  return (
    <div className='flex flex-col gap-4'>
      <h2 className="text-3xl">MainPage</h2>
      <div className='flex flex-row gap-4'>
        <Input key={version} placeholder='条件を入力してください' className='w-60'/>
        <Button variant="outline" onClick={handleReset}>検索する</Button>
      </div>
      <div className="max-w-fit">
        <SearchForm />
      </div>
    </div>
  )
}

export default MainContents
