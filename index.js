/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';

// 처음 실행되는 Component를 지정하는 메소드 실행
// 첫번째 파라미터 : 앱 이름
// 두번째 파라미터 : 처음 실행될 컴포넌트를 리턴해주는 콜백 함수 지정
// AppRegistry.registerComponent(appName, () => App);

// 새로 만든 MyApp.js 문서의 컴포넌트를 첫 시작 컴포넌트로 지정
AppRegistry.registerComponent(appName,()=>MyApp)

