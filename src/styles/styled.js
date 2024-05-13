import styled from "styled-components";

const primaryColor = ({ theme }) => {
  return theme?.token?.colorPrimary;
};

const secondaryColor = ({ theme }) => {
  return theme?.token?.secondaryColor;
};

const GlobalUtilityStyle = styled.div`
  ::-webkit-scrollbar-track {
    background: ${primaryColor};
  }

  ::-webkit-scrollbar-thumb {
    background: ${secondaryColor};
  }

  .avatar-bg {
    background: ${primaryColor};
  }

  .primary-text {
    color: ${primaryColor} !important;
  }

  .primary-bg {
    background: ${primaryColor} !important;
  }

  .secondary-text {
    color: ${secondaryColor} !important;
  }

  .secondary-bg {
    background: ${secondaryColor} !important;
  }

  .custom-primary-btn {
    background: ${primaryColor} !important;
    border: 1px solid ${primaryColor} !important;
    color: white !important;

    &:hover {
      background: ${secondaryColor} !important;
      border: 1px solid ${secondaryColor} !important;
      color: ${primaryColor} !important;
    }
  }

  .ant-page-header-heading {
    display: flex;
    align-items: center;
    gap: 10px 0;
  }

  .ant-menu-item-selected {
    background-color: ${primaryColor} !important;
    color: ${secondaryColor} !important;
  }
  .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: ${primaryColor} !important;
    font-weight: 700 !important;
  }

  .ant-menu-submenu-active > .ant-menu-submenu-title {
    color: ${primaryColor} !important;
    background-color: ${secondaryColor} !important;
  }

  .ant-menu-item-selected {
    color: ${secondaryColor} !important;
    background-color: ${primaryColor} !important;
  }

  .ant-menu-item-active {
    color: ${primaryColor} !important;
    background-color: ${secondaryColor} !important;
  }

  .ant-btn-primary {
    background-color: ${primaryColor} !important;

    &:hover {
      background-color: ${"#fff"} !important;
      color: ${primaryColor} !important;
      border: 1px solid ${primaryColor} !important;
    }
  }
`;

export { GlobalUtilityStyle };
