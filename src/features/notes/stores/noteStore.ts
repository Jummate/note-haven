import { create } from "zustand";
import { getAllTags } from "../../tags/stores/tagStore";
import { TagType } from "../../tags/types";
import { NoteForReviewType, NoteProps, PopulatedNote } from "../types";

export const notes: NoteProps[] = [
  {
    id: "note1",
    userId: "user1",
    title: "Buy groceries",
    content: "Milk, eggs, bread",
    isArchived: false,
    createdAt: "2025-05-21T10:00:00Z",
    updatedAt: "2025-05-21T10:00:00Z",
    tagIds: ["tag1", "tag2"],
  },
  {
    id: "note2",
    userId: "user1",
    title: "Buy groceries",
    content: "Milk, eggs, bread",
    isArchived: false,
    createdAt: "2025-05-21T10:00:00Z",
    updatedAt: "2025-05-21T10:00:00Z",
    tagIds: ["tag1", "tag3"],
  },
  {
    id: "note3",
    userId: "user1",
    title: "Buy groceries",
    content: "Milk, eggs, bread",
    isArchived: false,
    createdAt: "2025-05-21T10:00:00Z",
    updatedAt: "2025-05-21T10:00:00Z",
    tagIds: ["tag1", "tag2"],
  },
];

interface NoteState {
  notes: NoteProps[];
  tags: TagType[];
  notesById: Map<string | number, NoteProps>;
  tagMap: Map<string | number, TagType>;

  getNotes: () => PopulatedNote[] | undefined;
  getNoteById: (id: string | number) => NoteForReviewType | undefined;
  setNotes: (notes: NoteProps[]) => void;
  setTags: (tags: TagType[]) => void;
}

export const useNoteStore = create<NoteState>((set, get) => {
  const initialTags = getAllTags();

  return {
    notes,
    tags: initialTags,
    notesById: new Map(notes.map(note => [note.id, note])),
    tagMap: new Map(initialTags.map(tag => [tag.id, tag])),

    getNotes: () => {
        const { tagMap } = get();
        return populateNotesEfficiently(notes, initialTags, tagMap)
    },

    getNoteById: (id: string | number) => {
      const { notesById, tagMap } = get();
      const note = notesById.get(id);
      if (!note) return undefined;

      const tags = note.tagIds
        .map((tagId:string | number) => tagMap.get(tagId))
        .filter(Boolean) as TagType[];

      return { ...note, tags };
    },

    setNotes: (notes:NoteProps[]) => {
      set({
        notes,
        notesById: new Map(notes.map(note => [note.id, note]))
      });
    },

    setTags: (tags:TagType[]) => {
      set({
        tags,
        tagMap: new Map(tags.map(tag => [tag.id, tag]))
      });
    },
  };
});

// export function populateNotesEfficiently(notes: NoteProps[], tags: TagType[]): PopulatedNote[] {
//   const tagMap = new Map(tags.map(tag => [tag.id, tag]));

//   return notes.map(note => ({
//     ...note, 
//     tags: note.tagIds 
//       .map(id => tagMap.get(id)) 
//       .filter(Boolean) as TagType[], 
//   }));
// }

export function populateNotesEfficiently(
  notes: NoteProps[],
  tags: TagType[] = [],
  tagMap?: Map<string | number, TagType>
): PopulatedNote[] {
  const map = tagMap ?? new Map(tags.map(tag => [tag.id, tag]));

  return notes.map(note => ({
    ...note,
    tags: note.tagIds.map(id => map.get(id)).filter(Boolean) as TagType[],
  }));
}


export const getAllNotes = () => {
    const tags = getAllTags();
    return populateNotesEfficiently(notes, tags)
}

export const getNote = (noteId:string | number) => {
    const allNotes = getAllNotes()
    const noteMap = new Map(allNotes.map(note => [note.id, note]));
    return noteMap.get(noteId)

}

