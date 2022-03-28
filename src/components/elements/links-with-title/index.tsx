import Link from "next/link";
import styled from "styled-components";
import { LinkType } from "types";

interface Props {
  title: string;
  links: LinkType[];
}
export const LinksWithTitle: React.FC<Props> = ({ title, links }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Links>
        {links.map((link) => {
          return (
            <SingleLink key={link.id}>
              <Link href={link.link}>{link.name}</Link>
            </SingleLink>
          );
        })}
      </Links>
    </Container>
  );
};

const Container = styled.div``;
const SingleLink = styled.div`
  margin-bottom: 0.2rem;
`;
const Title = styled.p`
  font-size: 0.7rem;
  font-family: NimbusSanExtBol;
  margin-bottom: 1rem;
`;
const Links = styled.div`
  font-size: 0.9rem;
  font-family: GraphikRegular;
  display: flex;
  flex-direction: column;
`;
