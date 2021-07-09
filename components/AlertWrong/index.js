import styled from 'styled-components';

const ShowAlert = ({name}) => {
    return (
      <AlertWrong>
        <span>El campo {name} es requerido</span>
      </AlertWrong>
    );
  };

export default ShowAlert;


export const AlertWrong = styled.div`
  height: 20px;
  span {
    color: #ff1744;
  }
`;

