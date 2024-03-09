"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Business1() {
  const router = useRouter()

  useEffect(()=>{
    router.push("https://www.figma.com/file/32eJpcNQaz8D5CXahPdDpw/%5B%E6%96%B0%E5%83%8F%E7%B4%A0%5D-B%E7%AB%AF%E7%BD%91%E9%A1%B5UI?type=design&node-id=0%3A1&mode=design&t=MhHx9lGALf4qwf5l-1")
  },[])

  return (
    <></>
  )
}