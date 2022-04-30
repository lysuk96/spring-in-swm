import styled, { css } from "styled-components";

export const Title = styled.p`
  margin-top: 30px;
  font-size: 30px;
`;

export const SubTitle = styled.p`
  font-size: 24px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 1000px;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 210px; */
  width: 28%;
  min-width: 210px;
  height: 400px;
  background-color: #efecf8;
  border-radius: 8px;
  margin: 24px 18px;
  padding: 20px 14px 20px 21px;
  color: #61527f;
  font-weight: 700;
  letter-spacing: 0.3px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-out;
    /* box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2); */
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    top: -4px;
  }

  @media screen and (max-width: 600px) {
    min-width: 300px;
    height: 400px;
    // padding: 20px 14px 15px 20px;
  }
  @media screen and (max-width: 900px) {
    min-width: 300px;
    height: 400px;
    // padding: 20px 14px 15px 20px;
  }
`;

export const MemberName = styled.p`
  width: 100%;
  font-size: 25px;
  word-wrap: break-word;
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    margin-bottom: 2px;
  }
`;

export const Tag = styled.div`
  width: fit-content;
  padding: 4px 10px;
  margin-right: 4px;
  margin-top: 10px;
  border: none;
  font-weight: 600;
  color: white;
  border-radius: 8px;
  font-size: 14px;
  ${({ type }) => type == "FE" && `background: #0B099B;`}
  ${({ type }) => type == "BE" && `background: #ED6E69;`}
  ${({ type }) => type == "AI" && `background: #60B9CB;`}


  // font-size
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  @media screen and (max-width: 600px) {
    margin-bottom: 3px;
    font-size: 10px;
  }
`;

export const Status = styled.div`
  font-size: 18px;
`;
export const Detail = styled.div`
  font-size: 18px;
`;
