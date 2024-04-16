import styled from "styled-components";

function SidebarItem(props) {
  return (
    <div>
      <p>{props.menu.name}</p>
    </div>
  );
}

export default SidebarItem;
