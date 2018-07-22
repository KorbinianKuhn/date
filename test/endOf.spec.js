const moment = require("moment");
const datetime = require("./../index");

datetime.addPrototypes();

describe("endOf functions", () => {
  const dates = [
    new Date("2017-05-26T21:21:34.381Z"),
    new Date("2018-01-01T00:00:00.000Z"),
    new Date("2019-12-31T23:59:59.999Z")
  ];
  const functionNames = [
    "endOfSecond",
    "endOfMinute",
    "endOfHour",
    "endOfDay",
    "endOfMonth",
    "endOfYear"
  ];
  const momentIntervals = ["second", "minute", "hour", "day", "month", "year"];

  const dateA = new Date("2018-01-01T00:00:00.000Z");

  for (let i = 0; i < functionNames.length; i++) {
    const functionName = functionNames[i];
    const momentInterval = momentIntervals[i];
    for (const date of dates) {
      const expected = moment(date)
        .endOf(momentInterval)
        .toDate();

      it(`${functionName} should verify`, () => {
        expect(datetime[functionName](date)).toEqual(expected);
        expect(date[functionName]()).toEqual(expected);
        expect(
          datetime(date)
            [functionName]()
            .toDate()
        ).toEqual(expected);
      });
    }
  }
});
