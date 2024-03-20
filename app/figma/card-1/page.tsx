"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Card1() {
  const router = useRouter()

  useEffect(()=>{
    router.push("https://www.figma.com/community/file/1352285842257827240")
  },[])

  return (
    <></>
  )
}