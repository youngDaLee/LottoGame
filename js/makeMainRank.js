const ranks = new function(){
    this.totalRanking = [
        {Rank:'1', Name:'박정연', Money:'100,000,000'},
        {Rank:'2', Name:'박정연', Money:'100,000,000'},
        {Rank:'3', Name:'박정연', Money:'100,000,000'},
        {Rank:'4', Name:'박정연', Money:'100,000,000'},
        {Rank:'5', Name:'박정연', Money:'100,000,000'}
    ]

    this.col = [];

    this.createTable = ()=>{
        //테이블을 만들고, 데이터를 채우는 코드

        //col에 테이블 헤더에 해당하는 데이터(my class의 key값들)를 넣어주는 코드
        //비어있는 col배열에 myclass 배열 속 객체들의 key값을 넣어줘야함.
        
        //myClass속 객체들 순회
        for( let i=0; i<this.totalRanking.length; i++){
            for(let key in this.totalRanking[i]){
                //key를 col배열에 담기
                //찾고자하는 문자열이 없을때 -1을 반환함. 
                //한번도 들어간 적 없는 데이터라면 col에 push해라.
                if(this.col.indexOf(key) === -1) this.col.push(key);
            }
        }
        // ---------------
        //table태그에 해당하는 html element를 만들어라 라는 말.
        const table = document.createElement('table');
        //id값 할당. classtable이라는 이름의 id값을 할당할거야. 
        table.setAttribute('id', 'rankTable');

        //table태그 안에 자손 태그로 tablerow 태그 만들어야 함. 
        //자식태그로써 하나의 행을 추가해라. 
        //-1을 주면 (마지막 부분에)첫번째 행이 생성된다. 
        //tr: 새로운 행 추가(가장 마지막 부분에.)
        let tr = table.insertRow(-1);
        //테이블 헤더에 데이터 작성
        for(let key of this.col){
            //th태그가 만들어짐. 그걸 th변수 안에다가 담아 둠. 
            let th = document.createElement('th');
            th.innerHTML = key;
            //table row의 가장 위에 th를 추가. 
            tr.appendChild(th);
        }

        //td작성
        for(let i=0; i<this.totalRanking.length; i++){
            //table에 일단 한 행을 추가
            //-1은 마지막 부분에 추가하라는 말.
            tr = table.insertRow(-1);
            //tableHeader 길이만큼 순회하면서 매칭되는 데이터 갖고오기.
            for(let j=0; j<this.col.length; j++){
                //하나의 칸을 만드는 method. insertCell.
                //-1은 마지막에 추가하라는 말. 
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = this.totalRanking[i][this.col[j]];
            } 
        }

        
        
        const div = document.querySelector('.rank_table_here');
        
        //테이블 안의 자식태그로서 
        div.appendChild(table);
    }
}


ranks.createTable();