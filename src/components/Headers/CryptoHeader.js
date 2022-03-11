import { Container } from "reactstrap";
import CryptoStats from "share/components/CryptoStats";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

const CryptoHeader = (props) => {
  const { display } = props;

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            {display?.showCryptoStats && <CryptoStats />}
            {display?.showCryptoDetail && (
              <>
                <h1 className="display-2 text-white">{display?.data?.name} ({display?.data?.symbol}) Price</h1>
                <p className="text-white mt-0 mb-5">
                {display?.data?.name} live price in US Dollar (USD). View value statistics, market cap and supply.
                </p>
              </>
            )}
          </div>
        </Container>

        {/* Waves Container */}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        {/* Waves end */}
      </div>
    </>
  );
};

CryptoHeader.defaultProps = {
  display: {},
};

CryptoHeader.propTypes = {
  display: PropTypes.object,
};

export default CryptoHeader;
