import { User } from '@gql/graphql'
import {create} from 'zustand'
import { persist,devtools } from 'zustand/middleware' 


interface UserState {
  id: number | undefined 
  avatarUrl: string | null 
  fullname: string 
  email?: string 
  updateProfileImage: (image: string) => void 
  updateUsername: (name: string) => void 
  setUser: (user: User) => void
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
        (set) => ({
          id: undefined, 
          fullname: "",
          email: "",
          avatarUrl: null,
          updateProfileImage(image: string) {
            set({avatarUrl: image})
          },
          updateUsername(name: string) {
            set({ fullname: name })
          },
          setUser(user) {
            const {id, avatarUrl, fullname, email} = user
            set({
              id: id || undefined, 
              avatarUrl, 
              fullname, 
              email
            })
          },
        }),
        {
          name: "user-store"
        } 
      )
  )
)