import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";


interface GeneralState {
  isProfileSettingModalOpen: boolean 
  isLoginModalOpen: boolean 
  isCreateRoomModalOpen: boolean 
  toggleProfileSettingModal: () => void 
  toggleLoginModal: () => void 
  toggleCreateRoomModal: () => void 
}

export const useGeneralStore = create<GeneralState>()(
  devtools(
    persist(
      (set) => ({
        isProfileSettingModalOpen: false, 
        isCreateRoomModalOpen: false ,
        isLoginModalOpen: false, 
        toggleProfileSettingModal: () => set((state) => ({
          isProfileSettingModalOpen: !state.isProfileSettingModalOpen
        })), 
        toggleCreateRoomModal: () => set((state) => ({
          isCreateRoomModalOpen: !state.isCreateRoomModalOpen
        })),
        toggleLoginModal: () => set((state) => ({
          isLoginModalOpen: !state.isLoginModalOpen
        }))

      }),
      {
        name: 'general-store'
      }
    )
  )
)