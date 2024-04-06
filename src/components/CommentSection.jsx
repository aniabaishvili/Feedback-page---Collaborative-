import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../App";
import { useParams, Link } from "react-router-dom";
import AddComment from "./AddComment";

export default function CommentSection() {
  const { data, setData } = useContext(MyContext);
  let { userId } = useParams();

  // console.log(data.productRequests.map((each) => {
  //   if( each.id == userId) {
  //     return each
  //   }
  // }))

  return (
    <>
      {data.productRequests.map((item) => {
        if (userId == item.id) {
          return (
            <ul key={item.id}>
              {item?.comments?.map((comment) => {
                return (
                  <StyledContainer key={comment.id}>
                    <h3>0 Comment</h3>
                    <div>
                      <img src={`.${comment.user.image}`} />
                      <div>
                        <div>
                          <p>{comment.user.name}</p>
                          <span>{comment.user.username}</span>
                        </div>
                        <a>Reply</a>
                      </div>
                    </div>
                    <Description
                    // style={{
                    //   borderBottom: "1px solid rgba(128, 128, 128, 0.5)",
                    //   paddingBottom: "24px",
                    // }}
                    >
                      {comment.content}
                    </Description>
                  </StyledContainer>
                );
              })}
            </ul>
          );
        }
        return null;
      })}

      <AddComment />
    </>
  );
}
const Description = styled.div`
  padding-left: 56px;
  padding-top: 18px;
  color: #647196;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const StyledContainer = styled.div`
  margin: 0 24px;
  background-color: #fff;
  padding: 34px;
  border-radius: 10px;
  @media only screen and (min-width: 768px) {
    max-width: 835px;
    margin: 0 auto;
    margin-top: 30px;
  }
  & > h3 {
    padding-bottom: 28px;
    color: #3a4374;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }
  & div > img {
    width: 40px;
    border-radius: 50%;
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  & > div > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > div > div > div > p {
    color: #3a4374;
    font-family: Jost;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.194px;
  }
  & div > div > div > span {
    color: #647196;
    font-family: Jost;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & div > div > a {
    color: #4661e6;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
