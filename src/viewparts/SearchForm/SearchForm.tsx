import PropTypes from 'prop-types'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const SearchForm = () => { 
  const [stationName, setStationName] = useState({
    departure: "",
    arrival: "",
  })
  const [disabled, setDisabled] = useState(true)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setStationName({
      ...stationName,
      [name]: value
    })
  }

  const handleChangeOrder = () => {
    setStationName({
      departure: stationName.arrival,
      arrival: stationName.departure,
    })
  }

  const handleSearch = () => {
    console.log(stationName)
  }

  useEffect(() => {
    setDisabled(!stationName.departure || !stationName.arrival)
  }, [stationName])

  return (
    <Card>
      <CardHeader>
        <CardTitle>新規予約</CardTitle>
        <CardDescription>予約したい条件を入力してください</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-4 justify-items-center">
          <div className='flex flex-col gap-2'>
            <Input 
              name='departure'
              className='w-60'
              placeholder='乗車駅'
              value={stationName.departure}
              onChange={handleChange}
            />
            <Input
              name='arrival'
              className='w-60'
              placeholder='降車駅'
              value={stationName.arrival}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row items-center">
            <Button 
              aria-label='乗車駅と降車駅の順序を入れ替える'
              onClick={handleChangeOrder}
              disabled={disabled}
            >入れ替える</Button>
          </div>
        </div>

      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSearch}
          disabled={disabled}
        >この条件で検索する</Button>
      </CardFooter>
    </Card>
  )
}

SearchForm.propTypes = { }