import { Ref } from 'vue'
export const useCounterState = () => {
    const count = useState<number>('count', () => 0)
    return {
        counter: readonly(count),
        countUp: countUp(count),
        countDown: countDown(count),
        Reset: Reset(count)
    }
}

const countUp = (count: Ref<number>) => () => {
    count.value++
}

const countDown = (count: Ref<number>) => () => {
    if(count.value > 0) {
        count.value--
    }
}

const Reset = (count: Ref<number>) => () => {
    count.value = 0
}

// 型定義メモ
// 文字列(string)
// 数値(number)
// 数値で扱えない範囲の数値(bigint)
// 真偽値(boolean)
// null(null)
// undefined(undefined)
// シンボル(symbol)
