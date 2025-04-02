import { vars } from './theme.css.ts'

type ThemeVars = typeof vars

export type SpaceToken = keyof ThemeVars['space']
export type SizeToken = keyof ThemeVars['fontSize']
