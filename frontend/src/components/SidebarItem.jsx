import styled from "styled-components";

const P = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #969696;
`;

function SidebarItem(props) {
  return (
    <div>
      <P>{props.menu.name}</P>
    </div>
  );
}

export default SidebarItem;
