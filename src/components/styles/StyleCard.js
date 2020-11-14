import styled from 'styled-components'

export const StyleCard = styled.div`
  padding: 30px;
  .card-leftright {
    display: flex;
    justify-content: space-between;
    padding: .75rem 0 0 0;

    .card-left p {
      text-transform: uppercase;
      color: #000;
      font-size: .78125rem;
      letter-spacing: 1px;
      text-align: left;
    }

    .card-right span {
      letter-spacing: .5px;
      line-height: 0;
      color: #000;
      font-size: .78125rem;
    }
  }

  h4 {
    font-size: .78125rem;
    font-weight: 500;
    line-height: 25px;
    color: #333;
    letter-spacing: 1px;
    text-align: left;
    width: 60%;
  }

  .card-img img {
    width: 100%;
    object-fit: cover;
  }

  .card-round {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    margin: 10px 0 0 0;
    &::after {
    content: "";
    background-image: url(${({img}) => img});
    background-position: center;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 1.8px;
    right: 1.48px;
  }
}
`