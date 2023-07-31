// 타입 추론
let aaa = "안녕하세요"
aaa = "hi"

// 타입 명시
let bbb: string = "안녕하세요"
bbb = "hi"

// 타입 명시 필요한 상황
let ccc: (string | number) = "안녕하세요"
ccc = 3
ccc = "hi"

// 숫자
let ddd: number = 10
ddd = 10

// 불린
let eee: boolean = true
eee = true
// eee = "true" => 자바스크립트에서 동작함

// 배열
let fff: number[] = [1, 2, 3]
fff = [4, 5, 6]

// 객체 타입
interface IProfile {
    name: string
    age: number | string
    school: string
    hobby?: string
}

const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐 초등학교"
}

profile.name = "훈이"
profile.age = "8살"
profile.school = "초등초등"

// 함수 타입
function add(num1: number, num2: number, unit: string) {
    const result = num1 + num2 + unit;
    console.log(result)
    return result
}

add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능!!