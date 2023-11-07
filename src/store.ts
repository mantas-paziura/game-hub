import { create } from 'zustand';
import Order from './entities/Order';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  order?: Order;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id?: number) => void;
  setOrder: (order: Order) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (id) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
  setPlatformId: (id) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
  setOrder: (order) => set((store) => ({ gameQuery: { ...store.gameQuery, order } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })), // Reset other fields
}));

export default useGameQueryStore;
