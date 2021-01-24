import { createGlobalStyle } from "styled-components";

// 한글: NotoSans
// 영문 + 특문: Heebo (unicode범위: U+0020-007E) 적용
export default createGlobalStyle`
  @font-face {
    font-family: 'NotoSans';
    font-weight: normal;
    src: url('/public/font/NotoSansCJKkr-DemiLight.woff2') format('woff2'),
      url('/public/font/NotoSansCJKkr-DemiLight.woff') format('woff');
  }
  @font-face {
    font-family: "NotoSans";
    font-style: normal;
    src: url("/public/font/Heebo-Regular.woff2") format("woff2"),
      url("/public/font/Heebo-Regular.woff") format("woff");
    unicode-range: U+0020-007E;
  }
  @font-face {
    font-family: 'NotoSans-Bold';
    src: url('/public/font/NotoSansCJKkr-Bold.woff2') format('woff2'),
      url('/public/font/NotoSansCJKkr-Bold.woff') format('woff');
  }
  @font-face {
    font-family: "NotoSans-Bold";
    src: url("/public/font/Heebo-Medium.woff2") format("woff2"),
      url("/public/font/Heebo-Medium.woff") format("woff");
    unicode-range: U+0020-007E;
  }
`;
