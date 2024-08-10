'use client'

import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

interface User {
	id: string
	email: string | null
	family_name: string | null
	given_name: string | null
	picture: string | null
}

interface UserContextType {
	user: User | null
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const { user } = useKindeBrowserClient()
	const [userState, setUserState] = useState(user)

	useEffect(() => {
		if (user) {
			setUserState(user)
		}
	}, [user])

	return (
		<UserContext.Provider value={{ user: userState }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => {
	const context = useContext(UserContext)
	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider')
	}
	return context
}
