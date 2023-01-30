import React, { useEffect } from 'react'
import RoutesComponent from '@/routes'
import { api } from '@/api'

function App() {
  const load = async () => {
    const res = await api.getPizzas({ limit: 20 })
    console.log(res.data)
  }

  useEffect(() => {
    load()
  })
  return (
    <div>
      <RoutesComponent />
    </div>
  )
}

export default App
