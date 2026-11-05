// check.js — 브라우저 없이 규칙 확인하기. P6 에서 채우고 P7 에서 한 번 더 늘립니다.
//
// 상황: 규칙이 맞는지 매번 브라우저를 열고 표를 눈으로 대 보기는 번거롭고, 빠뜨리기 쉽습니다.
// 할 일: 손으로 만든 daily 로 logic.js 의 함수를 불러 console.log 합니다.
//       console.log 줄마다 오른쪽에 예상 결과를 주석으로 "실행하기 전에" 적습니다.
// 실행: 터미널에서 node check.js
// 확인: 출력이 주석의 예상과 전부 같습니다.
// 커밋 메시지: p6: check (P7 에서 늘린 것은 p7: reasons 에 같이)
import { toDays, isGoodDay, summarize, reasons } from "./logic.js";

const daily = {
    time: ["11-07", "11-08", "11-10", "11-11"],
    temperature_2m_max: [6.7, 4.7, 9.8, 12.6],
    precipitation_probability_max: [0, 57, 0, 30],
    wind_speed_10m_max: [11.4, 4.6, 4.2, 10],
};

const days = toDays(daily);
const limits = { rain:30, wind: 10 };

console.log(days[0]); //{ date: '11-07', max:6.7, wind:11.4, rain: 0 }
console.log(isGoodDay(days[0], limits)); //false
console.log(isGoodDay(days[1], limits)); //false
console.log(isGoodDay(days[2], limits)); //true
console.log(isGoodDay(days[3], limits)); //true
console.log(summarize(days, limits)); //good for a run on 2 of 4 days
console.log(summarize([], limits)); //good for a run on 0 of 4 days

console.log(reasons(days[0], limits));  // ["wind"]
console.log(reasons(days[1], limits));  // ["rain"]
console.log(reasons(days[2], limits));  // []
console.log(reasons(days[3], limits));  // []
console.log(reasons({ rain: 57, wind: 11.2 }, limits)); // ["rain", "wind"]