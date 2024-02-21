import { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";

export const useNote = () => {
    const { note, dispatch } = useContext(NoteContext);
    const { notes, activeNote } = note;

    // 新しいノート追加ディスパッチ
    const addNote = () => {
        dispatch({ type: "add" });
    };

    // ノート削除ディスパッチ
    const deleteNote = (id) => {
        dispatch({ type: "delete", id });
    };

    // ノート編集ディスパッチ
    const editNote = (note) => {
        dispatch({ type: "edit", note });
    };

    // アクティブノート更新ディスパッチ
    const activateNote = (id) => {
        dispatch({ type: "active", id });
    };

    return { notes, activeNote, addNote, deleteNote, editNote, activateNote };
};
