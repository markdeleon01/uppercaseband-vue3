import { defineStore } from 'pinia'
import MemberService from '@/services/MemberService.js'

export const useMembersStore = defineStore('members', {
  state: () => ({
    members: []
  }),
  getters: {
    getMembersCount() {
      return this.members.length
    }
  },
  actions: {
    fetchMembers() {
      return MemberService.getMembers().then((response) => {
        this.members = response.data
      })
    }
  }
})
