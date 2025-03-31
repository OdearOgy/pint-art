import { vars } from './theme.css'

type ThemeVars = typeof vars

export type SpaceToken = keyof ThemeVars['space']
