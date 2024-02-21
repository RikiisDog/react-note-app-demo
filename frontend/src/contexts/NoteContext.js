import { createContext, useReducer } from "react";
import uuid from "react-uuid";
import { loadState, useSaveState } from "../hooks/useLocalStorage";

const NoteContext = createContext();

const initialState = {
    notes: [],
    activeNote: "",
};

const NoteReducer = (state, action) => {
    switch (action.type) {
        case "add": {
            const newNote = {
                title: "新しいノート",
                content: "新しいノートの内容です",
                id: uuid(),
                modDate: Date.now(),
            };
            return { ...state, notes: [...state.notes, newNote] };
        }
        case "delete": {
            const filterdNote = state.notes.filter((note) => note.id !== action.id);
            return { activeNote: "", notes: filterdNote };
        }
        case "edit": {
            const updatedNotes = state.notes
                .map((note) => (note.id === action.note.id ? { ...note, ...action.note, modDate: Date.now() } : note))
                .sort((a, b) => b.modDate - a.modDate);
            return { ...state, notes: updatedNotes };
        }
        case "active":
            return { ...state, activeNote: action.id };
        default:
            return state;
    }
};

const NoteProvider = ({ children }) => {
    const [note, dispatch] = useReducer(NoteReducer, loadState("notes") || initialState);
    useSaveState("notes", note);
    return <NoteContext.Provider value={{ note, dispatch }}>{children}</NoteContext.Provider>;
};

export { NoteContext, NoteProvider };
