/*
 모범이,0 
 웃음이,1 
 다정이,2 
 나른이,3 
 까불이,4 
 고독이,5 
*/

const qnaList = [
    
    {
        q:  '수업이 너무 재미가 없다',
        a: [
            { answer:'수업 너무 재미없어.. 다른애들이랑 몰래 놀아야겠다(신호를 보낸다)',type: [4,1]},
            { answer:'공부는 원래 재미가 없지..(그냥 공부한다)',type: [0,2]},
            { answer:'1교시 수업을 듣는 사람이 있나.. (이미 포기하고 잔다)',type:[3,5]}
        ]
    },
    {
        q: '지루한 적막을 깨고 쌤이 웃긴 드립을 시전하였다 (근데 하나도 안웃김.) ',
        a: [
            { answer: '선생님에게 맞드립을 친다',type: [4,1]},
            { answer: '별로 웃기진 않지만 웃어드린다',type: [0,2]},
            { answer: '안웃기니 웃지 않는다 & 듣지 않는다',type: [3,5]}
        ]
    },
    {
        q: ' 쉬는 시간 나의 모습은?',
        a: [
            { answer: '....(자는 중이어서 쉬는시간인지 모름)', type:[3,5]},
            { answer: '공부나 해야지', type:[0,2]},
            { answer: '애들한테 가야징(애들이 모여있는 곳으로 간다)',type:[1,4]}

        ]
    },
    {
        q: '나 머리잘랐어 이쁘지? 라고 친구가 와서 자랑을 한다',
        a: [
            { answer: '오 뭐야 이쁘다. 너 @@ 닮음ㅋㅋㅋ(웃으면서 칭찬해준다', type:[1,2,0]},
            { answer: '아니 안예쁜데? @@닮은듯 ㅋㅋㅋ(이뻐도 칭찬은 안한다)', type:[4]},
            { answer: '영혼없이 괜찮다고 해준다(관심없음)',type:[5,3]}
        ]
    },
    {
        q: '점심시간) 먼저 밥을 다 먹었다',
        a: [
            { answer: '다른애들을 기다린다', type:[2,0 ,1]},
            { answer: '할것도 없으니 반으로 간다', type:[5,3,4]}
        ]

    },
    {
        q:'내가 휴지를 가지러 가는데 한 친구가 자신의 것도 부탁한다',
        a: [
            { answer: '그 친구거를 챙겨준다', type: [2,0,3]},
            { answer: '친구한테 주는척하면서 자신이 쓴다',type: [4,1,5]}
        ]
    },
    {
        q:'종례가 끝났다',
        a: [
            { answer: '누구보다 빠르게 교실밖을 나간다',type: [5,4,3,0]},
            { answer: '친구들과 같이 가기 위해 기다린다', type: [2,1]}
        ]
    }

]
const infoList = [
    {
        name: '<모범이>', 
        desc: '#1등급 도둑 #넌 공부할때가 #제일 이뻐',
        infor: '누가 뭐라하지 않아도 열심히 공부하는 모습이 너무 멋있는 당신. 반 아이들도 당신의 이런 모습을 보고 대단하다고 생각하고, 배우려 다가옵니다.',
        inform:'성실하기 때문에 한 번 시작한 일은 꾸준히 합니다. 꾸준히 열심히 성실히 같는 단어는 당신을 위한 단어 같네요.'
        
              
    },

    {
        name: '<웃음이>',
        desc: '#학교 내 인싸 #너만 보면 웃음이 나',
        infor: '학교에서 웃음담당을 맡고 있어요. 하는 행동 하나하나가 아이들의 시선을 이끌고 아이들의 가운데에서 재밌는 드립을 치며 무료한 학교생활에 활력을 불어줍니다.',
        inform: ' 밝은 이미지 덕에 주변에 사람이 많아요. 웬만하면 모두와 잘 지내고 싶어서 웃고 있지만 차가운 반응에 상처도 받아요.내 이름을 모르는 선생님은 거의 없어요'
    },
    {
        name:'<다정이>',
        desc:'#항상 챙겨주는 배려왕 #친절함 한도 초과',
        infor: '학교에서 친구들에게 물건을 빌려주거나 배려하는 엄마같은 역할을 하고있군요. 친구들에게 도움을 자주 주기 때문에 대부분의 친구에게 인기 있습니다. 가끔 친절과 호의를 당연한 것으로 여기는 친구가 있어 속상해요. 단호한 거절보단 상처 받지 않도록 둥글게 돌려말하는 편이에요. 섬세하여 친구들에게 감동을 주기도 합니다.'
    },
    {
        name:'<나른이>',
        desc:'#볼때마다 자는 친구 #허리디스크 조심',
        infor:'쉬는 시간에 노는 것보다 잠자는 것이 더 좋아요. 아침에 늦잠자느라 지각할 뻔한 적이 많아요. 느긋한 편이지만 잠을 깨우면 예민해지기도 합니다.잠 때문에 까먹거나 놓치는 것이 많아 혼나도 굴하지 않고 자곤 합니다. 친구들이 그만 자라고 하기도 하지만 잠 잘때 모습이 제일 행복해보이네요.'
    },
    {
        name:'<까불이>',
        desc:'#학교 공식 개그 담당 #친구들의 활력소',
        infor:'학교에서 재미있는 개그를 많이 치는 타입이군요. 종종 친구나 선생님에게 좋지 않게 보일수도 있습니다. 하지만 재미있는 성격을 가지고 있기 때문에 금방 친구들과 어울립니다.가끔 얄미울 때가 있지만 그래도 장난끼 많은 모습이 까불이의 매력이에요.놀릴 때 리액션 해주는 친구가 제일 좋아요. 하지만 장난에 상처 받는 친구들도 있으니 조심할 필요도 있겠어요.'
    },
    {
        name:'<고독이>',
        desc:'#자발적 아싸 #혼자가 제일 좋아',
        infor:'새로운 사람과 친해지는 게 불편한 타입이군요. 자기 이야기 하는 걸 별로 좋아하지 않습니다. 가끔 차갑다는 말을 듣기도 해요. 하지만 자신이 좋아하거나 친한 친구에겐 다정해요.말투가 차가워서 로봇같다거나 화났냐는 말도 들어요. 영혼없는 리액션 장인이고 관심 없어서 그러는 거 맞아요. 친구들에게 시크한 이미지를 남기는 편이에요.'
    },
]