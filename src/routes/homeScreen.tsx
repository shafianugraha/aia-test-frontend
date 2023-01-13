import React from "react"
import { API_ENDPOINT } from "../config"
import axios from 'axios'
import clsx from 'clsx'
import { debounce } from '@mui/material'

import { Pagination, TextField, Box } from '@mui/material'
import { Search } from '@mui/icons-material'

import { ImageFeed } from '../App'
import PhotoCard from '../components/PhotoCard'
import Spinner from '../components/Spinner'

const HomeScreen: React.FunctionComponent = () => {
  const [imageFeed, setImageFeed] = React.useState<ImageFeed[]>([])
  const [totalPage, setTotalPage] = React.useState<number>()
  const [page, setPage] = React.useState<number>(1)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [search, setSearch] = React.useState<string>('')
  const [tag, setTag] = React.useState<string>('')

  const getImageFeed = async () => {
    setIsLoading(true)
    const response = await axios.get(`${API_ENDPOINT}/feed`, {params: {page, tag}})
    const data = await response.data.data
    const totalPage = await response.data.totalPages
    setImageFeed(data)
    setTotalPage(totalPage)
    setIsLoading(false)
  }

  const handleSetPage = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p)
  }

  const handleSetSearch = (value: string) => {
    setSearch(value)
    debouncedSearchterm(value)
  }

  const debouncedSearchterm = React.useMemo(() => {
    return debounce(setTag, 500)
  }, [])

  React.useEffect(() => {
    getImageFeed()
  }, [page, tag])

  return (
    <div className={clsx('flex flex-col items-center justify-center my-24')}>
      <div className={clsx('mb-10')}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Search by tag" variant="standard" value={search} onChange={(e) => {
          handleSetSearch(e.target.value)
        }} />
      </Box>
      </div>
      <div className={clsx('grid grid-cols-3 mx-10 justify-items-center content-center', isLoading && 'grid-cols-1')}>
        {!isLoading? imageFeed.map((image, index) => {
          return (
              <PhotoCard data={image} key={index}/>
          )
        }): <Spinner/>}
      </div>
      <div className={clsx('mt-10')}>
        <Pagination count={totalPage} color="primary" onChange={handleSetPage} />
      </div>
    </div>
  )
}

export default HomeScreen