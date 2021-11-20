import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function WithAuth ({ children }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      navigate('/login')
    }
  }, [])

  return children
}

export function WithoutAuth ({ children }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      navigate('/')
    }
  }, [])

  return children
}