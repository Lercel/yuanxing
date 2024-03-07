"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Zhongjian() {
  const router = useRouter()

  useEffect(()=>{
    router.push("https://xi3fpj.axshare.com")
  },[])

  return (
    <></>
  )
}