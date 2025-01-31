import styled from "@emotion/styled";

export const LayoutDiv = styled.div`
  text-align: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    color: #9176e4;
  }
`;

export const HeaderDiv = styled.div`
  @media (max-width: 430px) {
    width: 100%;
    padding: 10px 15px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 100%;
    padding: 20px 30px;
  }
`;

export const CloseDiv = styled.div`
  width: 50px;
  height: 50px;
  @media (max-width: 430px) {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 40px;
    height: 40px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 700;
  @media (max-width: 430px) {
    font-size: 20px;
    width: 100%;
    height: 45px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 100%;
    font-size: 34px;
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid #bababa;
  color: #bababa;
  @media (max-width: 430px) {
    max-width: 430px;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 25px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 500px;
    font-size: 24px;
    margin-bottom: 40px;
    padding: 15px 0;
  }
`;

export const LoginBtn = styled.button`
  background-color: #6f4cdb;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 30px;
  @media (max-width: 430px) {
    width: 100%;
    padding: 10px 0;
    margin-top: 25px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 500px;
    padding: 15px 0;
    font-size: 24px;
    margin-top: 40px;
  }
`;

export const YupDiv = styled.div`
  color: #f00;
  text-align: left;
  @media (max-width: 430px) {
    margin-top: 5px;
    font-size: 11px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    margin-top: 10px;
    font-size: 17px;
  }
`;

export const InputYupDiv = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  height: 110px;

  @media (max-width: 430px) {
    height: 70px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    height: 110px;
  }
`;

export const FormDiv = styled.div`
  margin: 0 auto;
  @media (max-width: 430px) {
    width: 100%;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    max-width: 500px;
    width: 100%;
  }
`;

export const LogoImg = styled.img`
  display: block;
  @media (max-width: 430px) {
    width: 230px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 300px;
  }
`;

export const TextSpan = styled.span`
  cursor: pointer;
  @media (max-width: 430px) {
    margin-left: 20px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    margin-left: 30px;
    font-size: 20px;
  }
`;

export const RoleDiv = styled.div`
  font-weight: 700;
  color: #c4b6f0;
  font-size: 14px;
  margin-left: 15px;
  margin-top: 30px;
  @media (max-width: 430px) {
    font-size: 10px;
    margin-left: 5px;
    margin-top: 30px;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    font-size: 14px;
    margin-left: 15px;
    margin-top: 30px;
  }
`;

export const SignUpInput = styled.input`
  border-bottom: 1px solid #bababa;
  color: #bababa;
  @media (max-width: 430px) {
    max-width: 430px;
    width: 100%;
    padding: 10px 0;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 500px;
    font-size: 24px;
    padding: 15px 0;
  }
`;
