### **아따빠르네 프로젝트 🍽️💼**

---

#### **1. 프로젝트 소개 📖**

- **프로젝트 명**: 아따빠르네 (atta parune)
- **컨셉**:
  - 회사원의 **점심 예약**을 빠르고 간편하게 지원
  - 회사의 **식대 관리**를 효율적으로 돕는 어플

---

#### **2. 프로젝트 참여자 👩‍💻👨‍💻**

**Front-End (FE) 🎨**

- **팀장**: 강정호
- **팀원**: 이한샘

**Back-End (BE) 🔧**

- **팀장**: 김우준
- **팀원**: 권혜지, 김일지, 사공수기, 이어진

---

#### **3. FE 역할 분담 ✍️**

- **강정호**:

  - 로그인 관련 기능 (Cookie, recoil)
  - 식당 찾기 (Kakao Map)
  - 사용자 예약, 앉아서 주문 기능
  - 식당 메뉴 CRUD
  - 사장님 정보 관리
  - 가게 등록

- **이한샘**:
  - 알림 기능 (Socket)
  - 주문 내역
  - QR 코드 생성 (qrcode.react)
  - 사용자 결제 기능
  - 사용자 정보 관리
  - 주문 CRUD
  - 메인 화면

---

#### **4. 개발 기간 📅**

- **기간**: 2025.01.09 ~ 2025.02.13

---

#### **5. 기술 스택 ⚙️**

```
- React, TypeScript, Tailwind CSS, Emotion, Recoil, Yup, Vite
- qrcode.react, Kakao Map, Swiper, SockJS
```

---

#### **6. 설치 및 실행 방법 🖥️**

1. **npm i** : 모든 라이브러리 설치
2. **npm run dev** : 프로젝트 실행

---

#### **7. 협업 자료 📂**

- **회의록**: [Notion](https://www.notion.so/2-17757d27ea1780b5bad3fea038d6931a)
- **레이아웃**: [Figma](https://www.figma.com/design/NefxkP15saJiPNTBjAluG8/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-UI?node-id=18-3&p=f&t=W2wpdpQ5RhGg9GtA-0)
- **발표 자료**: [Canva](https://www.canva.com/design/DAGeODjVcyI/V7uKqkA6ogICdGNIbhrr5A/edit)

---

#### **8. 프로젝트 구조 🗂️**

```
📂public
┃ ┣ 📜emailauth.png
┃ ┣ 📜loadingImage.jpg
┃ ┣ 📜logo.png
┃ ┣ 📜menu.png
┃ ┣ 📜profile.jpeg
┃ ┣ 📜startingPage.png
┃ ┣ 📜storeimg.png
┃ ┗ 📜storemain.png
📂src
┃ ┣ 📂assets
┃ ┃ ┗ 📜vite.svg
┃ ┣ 📂atoms
┃ ┃ ┣ 📜noticeAtom.jsx
┃ ┃ ┣ 📜restaurantAtom.jsx
┃ ┃ ┣ 📜roleAtom.jsx
┃ ┃ ┗ 📜userAtom.jsx
┃ ┣ 📂components
┃ ┃ ┣ 📂notification
┃ ┃ ┃ ┣ 📜NotificationIcon.jsx
┃ ┃ ┃ ┣ 📜NotificationMessage.jsx
┃ ┃ ┃ ┣ 📜NotificationPage.jsx
┃ ┃ ┃ ┗ 📜StompComponent.jsx
┃ ┃ ┣ 📜api.js
┃ ┃ ┣ 📜cookie.js
┃ ┃ ┣ 📜Loading.jsx
┃ ┃ ┣ 📜MenuBar.jsx
┃ ┃ ┣ 📜Modal.jsx
┃ ┃ ┣ 📜useAuth.jsx
┃ ┃ ┗ 📜useModal.jsx
┃ ┣ 📂constants
┃ ┃ ┗ 📜Role.js
┃ ┣ 📂pages
┃ ┃ ┣ 📂auth
┃ ┃ ┃ ┣ 📜EditPwPage.jsx
┃ ┃ ┃ ┣ 📜EmailAuthPage.jsx
┃ ┃ ┃ ┣ 📜FindIdPage.jsx
┃ ┃ ┃ ┣ 📜FindPwPage.jsx
┃ ┃ ┃ ┣ 📜LoginPage.jsx
┃ ┃ ┃ ┣ 📜loginStyle.js
┃ ┃ ┃ ┣ 📜PolicyPage.jsx
┃ ┃ ┃ ┗ 📜SignUpPage.jsx
┃ ┃ ┣ 📂order
┃ ┃ ┃ ┣ 📂placetoorder
┃ ┃ ┃ ┃ ┣ 📜OrderLoading.jsx
┃ ┃ ┃ ┃ ┣ 📜OrderMemberPage.jsx
┃ ┃ ┃ ┃ ┣ 📜OrderPricePage.jsx
┃ ┃ ┃ ┃ ┣ 📜OrderRequestPage.jsx
┃ ┃ ┃ ┃ ┣ 📜PlaceToOrder.jsx
┃ ┃ ┃ ┃ ┣ 📜QRCode.jsx
┃ ┃ ┃ ┃ ┗ 📜QRCodeScan.tsx
┃ ┃ ┃ ┗ 📜IndexPage.jsx
┃ ┃ ┣ 📂payment
┃ ┃ ┃ ┗ 📜PaymentList.jsx
┃ ┃ ┣ 📂restaurant
┃ ┃ ┃ ┣ 📜MenuSelectPage.jsx
┃ ┃ ┃ ┣ 📜RestaurantDetailPage.jsx
┃ ┃ ┃ ┗ 📜RestaurantPage.jsx
┃ ┃ ┣ 📂storeManager
┃ ┃ ┃ ┣ 📂menu
┃ ┃ ┃ ┃ ┗ 📜StoreMenuPage.jsx
┃ ┃ ┃ ┣ 📂salesConfirm
┃ ┃ ┃ ┃ ┣ 📜LineChart.jsx
┃ ┃ ┃ ┃ ┣ 📜Sales.jsx
┃ ┃ ┃ ┃ ┣ 📜SalesConfirm.jsx
┃ ┃ ┃ ┃ ┗ 📜SalesPage.jsx
┃ ┃ ┃ ┣ 📂storeAuth
┃ ┃ ┃ ┃ ┣ 📜StoreInfo.jsx
┃ ┃ ┃ ┃ ┗ 📜StoreInfoPage.jsx
┃ ┃ ┃ ┣ 📂tableManage
┃ ┃ ┃ ┃ ┣ 📜OderList.jsx
┃ ┃ ┃ ┃ ┗ 📜Table.jsx
┃ ┃ ┃ ┣ 📜AddStorePage.jsx
┃ ┃ ┃ ┣ 📜SideBar.jsx
┃ ┃ ┃ ┣ 📜SideBarRight.jsx
┃ ┃ ┃ ┗ 📜StorePage.jsx
┃ ┃ ┣ 📂user
┃ ┃ ┃ ┗ 📜UserMainPage.jsx
┃ ┃ ┣ 📂userInfo
┃ ┃ ┃ ┣ 📜EditInfoPage.jsx
┃ ┃ ┃ ┗ 📜IndexPage.jsx
┃ ┃ ┣ 📜IndexPage.jsx
┃ ┃ ┗ 📜NotFound.jsx
┃ ┣ 📜App.css
┃ ┣ 📜App.jsx
┃ ┣ 📜index.css
┃ ┣ 📜main.tsx
┃ ┗ 📜vite-env.d.ts
📂tree
📜.env
📜.gitignore
📜.prettierrc
📜eslint.config.js
📜index.html
📜manifest.json
📜package-lock.json
📜package.json
📜README.md
📜tailwind.config.js
📜tsconfig.app.json
📜tsconfig.json
📜tsconfig.node.json
📜vite.config.ts
```

---

#### **9. 연락처 📧**

- **강정호**: rkdwjdgh08@gmail.com
- **이한샘**: dev.213am@gmail.com

---
