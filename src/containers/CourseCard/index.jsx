import React from 'react';
// import PropTypes from 'prop-types';
import { Card } from '@edx/paragon';

import shapes from 'data/services/lms/shapes';

import RelatedProgram from './components/RelatedProgram';
import CourseCardMenu from './components/CourseCardMenu';
import CourseCardBanners from './components/CourseCardBanners';
import CourseCardActions from './components/CourseCardActions';

export const CourseCard = ({ cardData }) => {
  const {
    course: {
      title,
      bannerUrl: imageUrl,
    },
    courseRun: {
      courseNumber,
      accessExpirationDate,
    },
  } = cardData;
  const providerName = cardData.provider?.name;
  return (
    <div className="mb-3">
      <Card orientation="horizontal">
        <Card.ImageCap
          src={imageUrl}
          srcAlt="course thumbnail"
          // logoSrc='https://via.placeholder.com/150'
          // logoAlt='Card logo'
        />
        <Card.Body>
          <Card.Header
            title={title}
            actions={<CourseCardMenu />}
          />
          <Card.Section>
            {providerName || 'Unkown'} • {courseNumber} • Access expires {accessExpirationDate}
          </Card.Section>
          <Card.Footer orientation="vertical" textElement={<RelatedProgram />}>
            <CourseCardActions cardData={cardData} />
          </Card.Footer>
        </Card.Body>
      </Card>
      <CourseCardBanners cardData={cardData} />
    </div>
  );
};

CourseCard.propTypes = {
  cardData: shapes.courseRunCardData.isRequired,
};

CourseCard.defaultProps = {};

export default CourseCard;
