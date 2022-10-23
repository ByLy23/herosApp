import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init)
  const login = async (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: '1',
        name,
      },
    }
    localStorage.setItem('user', JSON.stringify(action.payload))
    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({
      type: types.logout,
    })
  }
  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>{children}</AuthContext.Provider>
  )
}
