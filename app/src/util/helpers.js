/**
 * Helper Utils
 */
import { color } from './styled';

export function consoleGreet() {
  console.log(`%c Welcome to Lollipop `, `background: ${color.primary}; color: ${color.white}`);
}

export const endpoint = {
  league: 'http://localhost:7777/league-api'
}