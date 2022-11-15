//4
// 소문자알파벳으로 이루어진 문자열 s를 매개변수로 받습니다. 중복되지 않는 가장 긴 문자열의 길이를 반환해야합니다.
// Math.max()함수는 두 값을 인자로 받아 비교하고 둘 중 더 높은 값을 반환합니다.

function solution(s) {
    let max = 0 // 정답 저장 변수
    let start = 0 // 시작점을 정하는 변수
    let map = {} // 값 저장할OBJ

        for(let end = 0; end < s.length; end++ ) {
            if(map[s[end]] !== undefined && map[s[end]] >= start) {
                start = map[s[end]] + 1
            }
            map[s[end]] = end
            max = Math.max(max, end - start +1) // for 문돌때마다 max값을 비교해줌
        }
     return max
}

console.log(solution("abcc"))

/*
abssccbsbsv 일때 테스트 케이스

for (end = 0) 일 때 for문 동작 과정
map { map[s[0]] == undefined}  -> if문 무시
map[s[0]] = end map의 key 값 s[0]에 value로 end를 할당 이 시점에서 map의 상태{s[0] : 0}
max = Math.max(0, 0 - 0 + 1 ) -> max == 1

for (end = 1) 일 때 for문 동작 과정
map { map[s[1]] == undefined} -> if문 무시
map[s[1]] == end map의 key 값 s[1] 에 vlaue로 end를 할당 이 시점 map의 상태 { a : 0 , b : 1}
max = Math.max(1, 1 -0 + 1 ) -> max == 2


for (end = 2) 일 때 for문 동작 과정
map { map[s[2]] == undefined} -> if문 무시
map[s[2]] == end map의 key 값 s[2] 에 vlaue로 end를 할당 이 시점 map의 상태 { a : 0 , b : 1 , s : 2}
max = Math.max(2, 2 - 0 + 1 ) -> max == 3



for (end = 3) 일 때 for문 동작 과정
map { map[s[3]] !== undefined} -> map[s[3]] 은 s : 2 즉 undefined가 아니므로 if문 해당
&& map[s[end]] == 2 >= start == 0 start보다 크거나 작으므로 if문 해당 논리곱 완성
추가로 논리곱 if문에 해당하는 경우는 중복된 문자열이 나온 시점밖에 없기때문에
논리곱 if문에 해당할 시 중복없이 가장 긴 상태를 의미함
start = map[s[end]] + 1 index는 0부터 시작하기때문에 중복나온시점의 end값 +1을 해주면
중복 없는 길이를 알 수 있음

map[s[3]] = end 중복값을 찾았어도 뒤의 문자열을 비교해야하기때문에 index는 차례대로 밟아야함 현재 index를 할당
이 시점 map의 상태 { a : 0 , b : 1 , s : 3}

max = Math.max(3 , 3 - 3 + 1) -> if문에 해당되어 start값이 할당되어서 3 , 1    3이더크므로 max == 3


for (end = 4) 일 때 for문 동작 과정
map { map[s[4]] == undefined} -> if문 무시 
map[s[4]] == end map의 key 값 s[4] 에 vlaue로 end를 할당 이 시점 map의 상태 { a : 0 , b : 1 , s : 3 , c : 4}
max = Math.max(3, 4 - 4 + 1 ) -> max == 3




*/


