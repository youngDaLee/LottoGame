# LottoGame
👩‍💻2021 1학기 이니로 웹 프로젝트

<br>

## Commit 기록
| When | What |
|:---:|---|
| 2021-04-28 | Lotto number Crawling |
| 2021-05-06 | Lotto Information Crawling |
| 2021-05-07 | Modify Lotto Information Crawling |
| 2021-05-10 | Put lotto info in MySQL & MySQL linkage with project |
| 2021-05-16 | Add getPrice function |
| 2021-05-20 | Create server by node.js |
| 2021-05-29 | Make ranking |

<br>

## 데이터베이스 구성
### 로또 정보 테이블(lotto_info)
![image](https://user-images.githubusercontent.com/57928612/117430194-d62f1e00-af62-11eb-886d-807a45f9ef5f.png)

![image](https://user-images.githubusercontent.com/57928612/117430302-f52db000-af62-11eb-8b8e-a58a4f9068da.png)

- 이런 식으로 961회차까지 데이터베이스 내에 저장
- [참고 링크 : csv를 데이터베이스 내에 넣는 방법](https://huddling.tistory.com/26)
- [참고 링크 : csv 파일 넣어야 할 위치 알아내는 방법](https://blog.naver.com/alsdomm/221737364291)

### 랭킹 테이블(ranking)
![image](https://user-images.githubusercontent.com/57928612/120060213-6c052700-c091-11eb-8495-b31d54c1bde7.png)

- 입력한 닉네임, 총 상금, 게임한 날짜가 테이블에 들어감

### 데이터베이스 간단 정보
- ID : GoldPig
- password : Dream
- 데이터베이스명 : LottoGame
- 로또 정보 테이블명 : lotto_info
- 랭킹 테이블명 : ranking

<br>

## 프로젝트 생성 참고 링크
- [스프링 프로젝트 초기 설정](https://all-record.tistory.com/174)
- [스프링 mysql 연동](https://all-record.tistory.com/175)

