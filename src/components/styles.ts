import {w} from 'windstitch'

const dark: boolean = true

export const Button = w.button(`
  w-8 
  h-8 
  rounded 
  flex 
  items-start 
  justify-center 
  ${dark  ? 'bg-zinc-50' : 'bg-zinc-800 '}
  hover:bg-zinc-700
`)