import React from "react"
import { API_ENDPOINT } from "../config"
import axios from 'axios'
import clsx from 'clsx'
import { Pagination } from '@mui/material'

import { ImageFeed } from '../App'
import PhotoCard from '../components/PhotoCard'

const HomeScreen: React.FunctionComponent = () => {
  const [imageFeed, setImageFeed] = React.useState<ImageFeed[]>([])
  const [totalPage, setTotalPage] = React.useState()
  const [page, setPage] = React.useState(1)

  const getImageFeed = async () => {
    const response = await axios.get(`${API_ENDPOINT}/feed`, {params: {page}})
    const data = await response.data.data
    const totalPage = await response.data.totalPages
    setImageFeed(data)
    setTotalPage(totalPage)
  }

  const handleSetPage = (e: unknown, p: number) => {
    setPage(p)
  }

  React.useEffect(() => {
    getImageFeed();
  }, [page])

  return (
    <div className={clsx('flex flex-col items-center justify-center my-24')}>
      <div className={clsx('grid grid-cols-3 mx-10 justify-items-center content-center')}>
        {imageFeed.map((image, index) => {
          return (
              <PhotoCard data={image} key={index}/>
          )
        })}
      </div>
      <div className={clsx('mt-10')}>
        <Pagination count={totalPage} color="primary" onChange={handleSetPage} />
      </div>
    </div>
  )
}

export default HomeScreen