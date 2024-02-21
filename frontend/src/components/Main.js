import "../styles/Main.css";
import { useNote } from "../hooks/useNote";
import Markdown from "react-markdown";

export const Main = () => {
    const { notes, activeNote, editNote } = useNote();

    if (!activeNote) {
        return <div className="no-active-note">ノートが選択されていません</div>;
    }

    // 出力するノートを検索
    const previewNote = notes.find((note) => note.id === activeNote);

    // タイトルの変更
    const handleTitleChange = (e) => {
        editNote({
            ...previewNote,
            title: e.target.value,
        });
    };

    // コンテンツの変更
    const handleContentChange = (e) => {
        editNote({
            ...previewNote,
            content: e.target.value,
        });
    };

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" id="title" value={previewNote?.title || ""} onChange={handleTitleChange} />
                <textarea
                    id="content"
                    placeholder="ノート内容を記入"
                    value={previewNote?.content || ""}
                    onChange={handleContentChange}
                ></textarea>
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{previewNote?.title}</h1>
                <Markdown className="markdown-preview">{previewNote?.content}</Markdown>
            </div>
        </div>
    );
};
