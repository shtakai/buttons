---
name: User
desc: The user model.
src: https://github.com/kt3k/buttons/blob/master/src/domain/user.js
edit: https://github.com/kt3k/buttons/edit/master/src/domain/user.md
props:
- name: id
  type: string
  desc: The id of the user
- name: authId
  type: string
  desc: The id for authentication
- name: picture
  type: string
  desc: The url of the picture of the user
- name: authData
  type: Object
  desc: The raw data from Auth0
- name: displayId
  type: string
  desc: The id for display
- name: displayName
  type: string
  desc: The name for display
- name: buttons
  type: Button[]
  desc: The buttons of the user
---
