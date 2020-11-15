import styled from 'styled-components'

export const StyleFooter = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  width: 100%;

  .footer_info {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    .footer_info-col {
      color: #757575;
      vertical-align: top;

      .footer_info-heading {
        text-transform: uppercase;
        color: #000;
        font-size: .875rem;
        line-height: 25px;
        letter-spacing: 1.25px;
        text-align: left;
        margin-bottom: .75rem;
      }

      ul {
        list-style: none;

        li {
          display: block;
          a {
            text-decoration: none;
            text-transform: uppercase;
            font-size: .6875rem;
            letter-spacing: 1.25px;
            color: #000;
          }
        }
      }

      .footer_newsletter-heading {
        text-transform: uppercase;
        color: #000;
        font-size: .875rem;
        line-height: 25px;
        letter-spacing: 1.25px;
        text-align: left;
        margin-bottom: .75rem;
      }

      .footer-form {
        display: flex;
        justify-content: space-between;

        input {
          box-sizing: border-box;
          border-radius: 2px;
          padding: 0px 0px 0px 5px;
          height: 38px;
          text-align: left;
          color: rgb(0, 0, 0);
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0px;
          background-color: rgb(255, 255, 255);
          border: none;
          width: 100%;

          &:focus {
            box-shadow: rgb(0, 100, 205) 0px 0px 5px;
            outline: none;
          }
        }

        button {
          padding: 10px;
          position: relative;
          border: none;
          background: none;

          &:focus {
            outline: none;
          }
          &::after {
            content: "";
            background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTMxIDE2bC0xNS0xNXY5aC0xNnYxMmgxNnY5eicgZmlsbD0nIzAwMDAwMCc+PC9wYXRoPjwvc3ZnPg==");
            width: .8rem;
            height: .8rem;
            cursor: pointer;
            position: absolute;
            top: 10px;
            right: 0;
          }
        }

      }

      .socialLinks {
        list-style: none;
        text-align: right;

        li {
          display: inline-block;
          margin: 0 12px 12px 0;
        }
      }
    }
  }

  .signature {
    float: right;
    width: auto;
    height: auto;
  }

  .footer_copyright {
    ul {
      list-style: none;
      li {
        display: inline-block;
        margin-right: 50px;
        a {
          text-decoration: none;
          font-size: .75rem;
          color: #000;
        }
      }
    }
  }
`
