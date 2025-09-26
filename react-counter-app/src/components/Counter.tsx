import { useState } from "react";
import { CounterButton } from './CounterButton';
import { CounterDisplay } from './CounterDisplay';

export function Counter() {
    // カウント状態
    const [count, setCount] = useState(0);

    // カウントを加算するイベントハンドラ
    const increment = () => {
        setCount(preCount => preCount + 1);
    }

    // カウントを減算するイベントハンドラ
    const decrement = () => {
        setCount(preCount => preCount - 1);
    }

    return (
        <div>
            <h2>カウンターアプリ</h2>
            <CounterDisplay count={count} />
            <CounterButton label="＋" onClick={increment} disabled={count >= 10} />
            <CounterButton label="－" onClick={decrement} disabled={count <= 0} />
        </div>

    )
}