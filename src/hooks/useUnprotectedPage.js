import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToHomePage } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToHomePage(navigate)
    }
  }, [navigate])
}

export default useUnprotectedPage; 