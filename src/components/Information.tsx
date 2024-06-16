import styled from "styled-components";

function Information() {
  return (
    <Infro>
      <p>Sneaker Company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <h5>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </h5>
    </Infro>
  );
}
const Infro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: #ff7e1b;
    font-family: "Kumbh Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.846px;
    text-transform: uppercase;
  }
  h1 {
    color: #1d2026;
    font-family: "Kumbh Sans";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 114.286% */
  }
  h5 {
    color: #69707d;
    font-family: "Kumbh Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
  }
`;
export default Information;
