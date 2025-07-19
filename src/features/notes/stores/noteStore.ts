import { create } from 'zustand';
import { NoteForReviewType, NoteProps } from '../types';
import { TagType } from '../../tags/types';
import { useTagStore } from '../../tags/stores/tagStore';

interface NoteState {
  notes: NoteProps[];
  activeNotes: NoteProps[];
  archivedNotes: NoteProps[];
  filteredNotes: NoteProps[];
  tags: TagType[];
  notesById: Map<string | number, NoteProps>;
  notesByTag: Map<string, NoteProps[]>;
  filterQuery: string;
  selectedNoteId: string;

  getNotes: () => NoteProps[] | undefined;
  getNoteById: (id: string | number) => NoteForReviewType | undefined;
  setNotes: (notes: NoteProps[]) => void;
  setFilteredNotes: (notes: NoteProps[]) => void;
  getNotesByTag: (tagName: string) => NoteProps[] | undefined;
  getActiveNotes: () => NoteProps[] | undefined;
  getArchivedNotes: () => NoteProps[] | undefined;
  setFilterQuery: (query: string) => void;
  getSelectedNoteId: () => string;
  setSelectedNoteId: (id: string) => void;
}

export const useNoteStore = create<NoteState>((set, get) => {
  return {
    notes: [],
    tags: [],
    archivedNotes: [],
    activeNotes: [],
    filteredNotes: [],
    notesById: new Map(),
    notesByTag: new Map(),
    filterQuery: '',
    selectedNoteId: '',

    getNotes: () => get().notes,

    getNoteById: (id: string | number) => {
      const note = get().notesById.get(id);
      if (!note) return undefined;

      const tags = note.tags
        .map((tag: TagType) => useTagStore.getState().tagMap.get(tag.id))
        .filter(Boolean) as TagType[];

      return { ...note, tags };
    },

    getActiveNotes: () => get().activeNotes,
    getArchivedNotes: () => get().archivedNotes,

    getNotesByTag: (tagName: string) => get().notesByTag.get(tagName),
    getSelectedNoteId: () => get().selectedNoteId,

    setNotes: (notes: NoteProps[]) => {
      const notesById = new Map(notes.map(note => [note.id, note]));
      const notesByTag = new Map<string, NoteProps[]>();
      const archivedNotes = notes.filter(note => note.isArchived);
      const activeNotes = notes.filter(note => !note.isArchived);

      for (const note of activeNotes) {
        for (const tag of note.tags) {
          if (!notesByTag.has(tag.name)) {
            notesByTag.set(tag.name, []);
          }
          notesByTag.get(tag.name)?.push(note);
        }
      }

      set({
        notes,
        notesById,
        notesByTag,
        activeNotes,
        archivedNotes,
      });
    },

    setFilteredNotes: (filteredNotes: NoteProps[]) => {
      set({ filteredNotes });
    },

    setFilterQuery: (query: string) => {
      set({ filterQuery: query });
    },

    setSelectedNoteId: (id: string) => {
      set({ selectedNoteId: id });
    },
  };
});
