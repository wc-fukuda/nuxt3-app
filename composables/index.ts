import { Ref } from "vue"
export const useTitle = () => {
    const title: Ref<string> = useState<string>('title', ()=> 'Hello world!')
    const changeTitle = (title: Ref<string>) => (value: string) => {
        title.value = value
    }
    return {
        title: readonly(title),
        changeTitle: changeTitle(title)
    }
}

// 型定義メモ
// 文字列(string)
// 数値(number)
// 数値で扱えない範囲の数値(bigint)
// 真偽値(boolean)
// null(null)
// undefined(undefined)
// シンボル(symbol)
