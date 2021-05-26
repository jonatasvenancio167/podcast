import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]

export default function usePersistedState<T>(key: string, initialState: any): Response<T>{
    
    const [state, setState] = useState(initialState)

    useEffect(() => {
        const storageValue = window.localStorage.getItem(key)
        
        if (storageValue){
            return  setState(JSON.parse(storageValue)) 
          } else {
            return initialState
          }
    }, [key])

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

  return [state, setState];
}