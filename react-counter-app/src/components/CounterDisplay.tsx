


type Count = {
    count: number
}

export function CounterDisplay({count}:Count) {
    return (
        <p>現在のカウント：{count}</p>
    )

}