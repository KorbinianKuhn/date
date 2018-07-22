const { MILLISECONDS_PER_SECOND, MILLISECONDS_PER_MINUTE, MILLISECONDS_PER_HOUR, MILLISECONDS_PER_DAY } = require('./internal/constants');
const { smallerEqualOrBigger } = require('./internal/smallerEqualOrBigger');

exports.isSameOrBefore = (dateA, dateB) => {
  return dateA.getTime() <= dateB.getTime();
};

exports.isSameOrBeforeMillisecond = (dateA, dateB) => {
  return dateA.getTime() <= dateB.getTime();
};

exports.isSameOrBeforeSecond = (dateA, dateB) => {
  if (dateB.getTime() - dateA.getTime() >= MILLISECONDS_PER_SECOND) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getDate(), dateB.getDate())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getHours(), dateB.getHours())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getMinutes(), dateB.getMinutes())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getSeconds() <= dateB.getSeconds();
};

exports.isSameOrBeforeMinute = (dateA, dateB) => {
  if (dateB.getTime() - dateA.getTime() >= MILLISECONDS_PER_MINUTE) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getDate(), dateB.getDate())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getHours(), dateB.getHours())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getMinutes() <= dateB.getMinutes();
};

exports.isSameOrBeforeHour = (dateA, dateB) => {
  if (dateB.getTime() - dateA.getTime() >= MILLISECONDS_PER_HOUR) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getDate(), dateB.getDate())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getHours() <= dateB.getHours();
};

exports.isSameOrBeforeDay = (dateA, dateB) => {
  if (dateB.getTime() - dateA.getTime() >= MILLISECONDS_PER_DAY) {
    return true;
  }

  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  switch (smallerEqualOrBigger(dateA.getMonth(), dateB.getMonth())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getDate() <= dateB.getDate();
};

exports.isSameOrBeforeMonth = (dateA, dateB) => {
  switch (smallerEqualOrBigger(dateA.getFullYear(), dateB.getFullYear())) {
    case -1:
      return true;
    case 1:
      return false;
  }

  return dateA.getMonth() <= dateB.getMonth();
};

exports.isSameOrBeforeYear = (dateA, dateB) => {
  return dateA.getFullYear() <= dateB.getFullYear();
};
