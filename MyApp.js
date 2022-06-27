// react 라이브러리에 존재하는 Component 클래스를 사용하기 위해 import
// 컴포넌트의 render()메소드라는 시스템을 react라는 라이브러릴에서 비롯되었음.
import React, {Component} from 'react'
import {Text, View,Button, StyleSheet,Image} from 'react-native'




// RN에서는 반드시 Component를 상속한 클래스만 화면에 보일 수 있음.
class MyApp extends Component{
    // 리액트의 Component 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드
    // render()의 리턴은 오직 1개의 컴포너느만 가능함.
    render(){

        let name="sam"  // 지역변수
        let btnTitle="click me"     // 버튼에 보여질 제목 글씨

        // 이 메소드에서 리턴한 컴포넌트가 화면에 보여짐
        // return <Text>Hello world!</Text>
                // <Text>Nice to meet you</Text>

        // 그래서 여러 컴포넌트들을 묶는 컴포넌트 그룹이 필요함. (android - view group)
        // 그룹용으로 만들어진 컴포넌트 : [View]
        // JSX언어의 특징은 js안에서 xml을 명시할 수 있고, 반대로 xml안에서 js변수나 함수도 사용할 수 있다.
        // xml 영역 안에서 js변수나 함수 호출문을 사용하고 싶다면 {} 만 표시하면 됨
        // 기본적으로 보여지는 스타일링은 css를 모티브로 적용되어 있음.
        // 단, 스타일을 css문서로 적용하는 것이 아니라 스타일 값을 가진 겍체를 만들어 설정으로
        // 지정해줌
        // return (
        //     <View style={style.rootContainer}>
        //         <Text style={style.mainText}>Hello {name}</Text>
        //         <Text style= {style.plainText}>Nice to meet you</Text>
        //         {/* Button은 스타일 작업이 불가함. style 속성이 없음. */}
        //         <View style={{marginTop:10, width:150}}>
        //             <Button title={btnTitle}></Button>
        //         </View>
        //     </View>
        // )

        // 이미지 컴포넌트도 한번 연습해보기 - 별도 수업 예정
        return(
            <View style={style.rootContainer}>
                <Text style={style.mainText}>Hello {name}</Text>
                <Text style={style.plainText}>Nice to meet you</Text>

                <Button title='button'></Button>
                <Button title={btnTitle} color='orange'></Button>
                <View style={{marginTop:10, width:200}}>
                    <Button title='버튼' color='#841594'></Button>
                </View>

                {/* 이미지 컴포넌트 */}
                {/* 이미지의 경로를 그냥 '' 문자열로 쓰는것이 아니라 */}
                {/* JS의 require() 함수를 이용해야만 함 */}
                <Image source={require('./image/moana01.jpg')} style={{margin:4, flex:1, resizeMode:'contain', width:null}}></Image>
            </View>
        )
    }
}

// 아래처럼 개발 스타일객체를 만들면 관리도 어렵고 자동완성기능도 제한적이어서
// 좀 별로임. 그래서 모든 스타일관련 객체를 하나로 묶는 클래스가 존재함
const style=StyleSheet.create({
    rootContainer:{
        backgroundColor:'#aaffcc',
        flex:1,
        padding:16
    },
    mainText:{
        color:'blue',
        fontSize:20,
        fontWeight:'bold',
        margin:16
    },
    plainText:{
        margin:8,
        color:'black'
    }
})

//MyApp 클래스가 보여주는ㄴ 컴포넌트들의 스타일값을 ㄱ자진 객체 생성
// 1. 텍스트 스타일(css 와 비슷한데 약간 다름)
const textStyle={color:'red', fontSize:20, fontWeight:'bold',margin:16}      // 단위 : 기번dp

// 2. 전체 View 의 스타일작업
const rootView={
    backgroundColor:'#aaffcc',
    // View의 기본높이는wrwap으로 됨.
    // height=500    디바이스마다 높이가 다르므로
    // height: '100%' 이 방법도 있지만
    // RN의 권장 사ㅣ즈 기ㅓㅃ
    // RN은 기본적으로 무조건 display 소것ㅇ이 flex 스타일로 설ㅈ어되어 있음.
    // 그리고 기본 flex 값이 방향인 flex-direction 값이 column(수직방향)으로 되어 있음.
    // 그래서 배치 방향을 변경하고 싶다면
    // flexDirection:'row'
    // flex의 속성중에서 다른 뷰와 비례적으로 사이즈를 결정하는 속성값
    // 마치 android의 layout-weight과 유사한 속성값
    flex:1,      // flex-grow 속성과 같은 역핳
    padding:16

}

// 중간 글씨의 스타일
const plainText={
    margin:8,
    color: 'black'
}

// 버튼의 스타일 객체 - 컴포넌트중에서 style이 안되는 것들도 있음.
const btnStyle={
    marginTop:40,
    backgroundColor:'yellow'

}

// 다른 문서(index.js)에서 이 MyApp 클래스를 사용하려면(import)
// 반드시 여기서 추출(export) 해야만 함.
// 하나의 .js 문서에서 export는 여러개 할 수 있음. 단, 그중에 반드시 1개는
// export default여야만 함.
export default MyApp