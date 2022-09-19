import { atom } from 'jotai';

// use to store user address after retrieving from wagmi useAccount.
// This prevent hydration error that would otherwise happens using directly wagmi address for conditionals.
export const userAtom = atom<string | undefined>(undefined);
