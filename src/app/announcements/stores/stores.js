import { create } from 'zustand'

const useAnnouncementsStore = create((set) => ({
  announcements: [],
  setAnnouncements: (newAnnouncements) => set({ announcements: newAnnouncements }),
}))

export default useAnnouncementsStore;
