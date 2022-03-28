import styled from "styled-components";
import { useState } from "react";
import { ForfendIconWhite } from "assets/svg";
import { LinksWithTitle } from "components/elements";
import { MainContainer } from "components/layout";
import { Form, InputWithArrow } from "components/ui";
import { NextPage } from "next";
import { companyLinks, resourcesLinks } from "./links";

export const Footer: NextPage = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Color>
      <MainContainer>
        <Content>
          <Left>
            <Icon>
              <ForfendIconWhite />
            </Icon>
            <Form onSubmit={handleSubmit}>
              <InputWithArrow
                arrow
                value={email}
                onChange={(e) => handleEmail(e)}
                placeholder="Subscribe To Our Newsletter"
              />
            </Form>
          </Left>
          <Right>
            <LinksWithTitle title="COMPANY" links={companyLinks} />
            <LinksWithTitle title="RESOURCES" links={resourcesLinks} />
          </Right>
        </Content>
        <Message>
          If you are experiencing a medical emergency, call 911 or go to your
          closest emergency room.
        </Message>
      </MainContainer>
    </Color>
  );
};

const Color = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
`;

const Left = styled.div`
  width: 370px;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
`;

const Icon = styled.div`
  margin-bottom: 1rem;
`;
const Message = styled.p`
  margin-bottom: 1rem;
  font-family: GraphikRegular;
  font-size: 0.9rem;
  border-top: 1px solid white;
  padding: 1.8rem 1rem;
`;
