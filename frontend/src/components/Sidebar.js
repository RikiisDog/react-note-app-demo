import "../styles/Sidebar.css";
import { useNote } from "../hooks/useNote";

export const Sidebar = () => {
    const { notes, activeNote, addNote, deleteNote, activateNote } = useNote();

    const handleDelete = (e, id) => {
        e.stopPropagation(); // 削除ボタンを押下したタイミングでactivateNoteイベントハンドラも同時に動いてしまうのを防ぐ
        deleteNote(id);
    };

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Note App</h1>
                <button onClick={addNote}>追加</button>
            </div>
            <div className="app-sidebar-notes">
                {notes.map((note) => (
                    <div
                        className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                        key={note.id}
                        onClick={() => activateNote(note.id)}
                    >
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={(e) => handleDelete(e, note.id)}>削除</button>
                        </div>
                        <p>{note.content.length > 80 ? note.content.substring(0, 80) + "..." : note.content}</p>
                        <small>
                            {new Date(note.modDate).toLocaleDateString("ja-JP", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
};
