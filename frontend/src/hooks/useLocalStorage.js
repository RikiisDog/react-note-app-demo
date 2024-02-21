import { useEffect } from "react";

// ローカルストレージから状態を読み込む関数
const loadState = (keyName) => {
    const storedData = localStorage.getItem(keyName);
    return storedData ? JSON.parse(storedData) : null;
};

// ローカルストレージに状態を保存するカスタムフック
const useSaveState = (keyName, state) => {
    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
    }, [keyName, state]);
};

export { loadState, useSaveState };
