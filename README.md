# yulcript
## 소개
visual studio code를 사용한 스크립트 언어 지원 확장을 개발하는 간단한 레포지토리입니다.

`yulcript`는 기초적인 수준의 데이터 저장을 지원하는 간단한 스크립트 언어입니다. 이런 가벼운 언어를 지원하는 방법을 커밋 별로 보여준는 것이 이 프로젝트의 목적입니다.

## 시작하기
- vscode v1.60.0 이상
- npm v6.14.8 이상

## yulcript
언어 확장 개발을 위한 가벼운 스크립트 언어입니다.
`yulcript`는 문자열과 숫자 하나 또는 여러개로 이루어진 데이터 구조를 정의합니다.

### 지원하는 형식
`yulcript`는 다음 형식을 지원합니다:
- number(int, double)
- string(\`~~~\`)
- array
  + number(int, int, ...;)
  + string(\`~~\`, \`##\`, ...;)

### 문장의 끝
각 형식은 쌍반점( ; )으로 끝맺습니다. 가독성을 위해 쌍반점을 사용하고 줄을 바꿔주세요.

### 주석
`yulcript`는 줄 단위 주석을 지원합니다:
- \# 문자부터 해당 줄의 끝까지 주석으로 취급합니다.

### 문법
`yulcript`는 객체 이름을 작성한 뒤 형식과 값을 나열하여 작성합니다.
```javascript
[status]                                     # 객체: status
    name: `elf`;                             # 이름: string
    hp: 10;                                  # 생명력: number(int)
    mp: 5;                                   # 정신력: number(int)
    skill: `magic arrow`, `grow`, `enchant`; # 스킬: string array

```

### 구조체
`yulcript`는 JSON 형식으로 구조체를 정의하여 객체의 구조를 고정할 수 있습니다.
```JSON
{
	"status":
	[
		{ 
			"key": "name",
			"value": "string",
			"desc": "이름입니다."
		},
		{ 
			"key": "hp",
			"value": "int",
			"desc": "체력"
		},
		{ 
			"key": "mp",
			"value": "int",
			"desc": "마력"
		},
		{ 
			"key": "skill",
			"value": "string",
			"array": 0, // 0일 경우 무한
			"desc": "보유한 스킬 목록입니다."
		},
	]
}
```