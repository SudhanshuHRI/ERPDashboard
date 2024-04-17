import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

const TopCards = ({ bg, icon, earning, subtitle, link }) => {
  return (

    <Card style={{ boxShadow: "0 0 10px gray", minHeight: "172px",cursor: "pointer" }} className="text-center bgCard">
      <CardBody>
        <Link href={link} style={{ textDecoration: "none",  }}>
          <div>
            <div className={`circle-box lg-box d-inline-block ${bg}`}>
              <i className={icon} />
            </div>
            <div className="">
              <h3 className="mb-0 font-weight-bold fs-5 mt-2">{earning}</h3>
              <small className="text-muted">{subtitle}</small>
            </div>
          </div>

        </Link>
      </CardBody>
    </Card>

  );
};

TopCards.propTypes = {
  bg: PropTypes.string,
  icon: PropTypes.string,
  earning: PropTypes.string,
  subtitle: PropTypes.string,
};

export default TopCards;
