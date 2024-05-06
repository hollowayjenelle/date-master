const unitTestingTask = require("./unitTestingTask");

describe("unitTestingTask", () => {
  it("unitTestingTask should display 'Argument `format` must be a string' error if date format not given", () => {
    expect(() => unitTestingTask(null, "28/03/2024")).toThrow(
      "Argument `format` must be a string"
    );
  });
  it("unitTestingTask should display 'Argument `date` must be instance of Date or Unix Timestamp or ISODate String' error if date is undefined or of wrong format", () => {
    expect(() => unitTestingTask("YYMMDD", null)).toThrow(
      "Argument `date` must be instance of Date or Unix Timestamp or ISODate String"
    );
  });
  it("unitTestingTask should return date, 04/10/2024 in the format of 2024-04-10", () => {
    const dateFormat = unitTestingTask(
      "YYYY-MM-dd HH:m:s:f a",
      "04/10/2024 15:30:00"
    );
    expect(dateFormat).toBe("2024-04-10 15:30:0:0 pm");
  });

  it("curremt language should be en", () => {
    const currentLanguage = unitTestingTask.lang();
    expect(currentLanguage).toBe("en");
  });
  it("should display date with time in the 12hr format with extended timezone format", () => {
    const dateFormat = unitTestingTask(
      "YY-MMMM-dd DDD, hh:mm:ss:ff A Z",
      "04/10/2024"
    );
    expect(dateFormat).toBe("24-April-10 Wednesday, 12:00:00:000 AM +00:00");
  });
  it("should display date with time in the 24hr format with extended timezone format", () => {
    const dateFormat = unitTestingTask(
      "YY-M-dd DDD, H:mm:ss:ff A Z",
      "04/10/2024"
    );
    expect(dateFormat).toBe("24-4-10 Wednesday, 0:00:00:000 AM +00:00");
  });
  it("should return date in D, MMM dd, YY format", () => {
    const dateFormat = unitTestingTask("DD, MMM dd, YY", "04/10/2024");
    expect(dateFormat).toBe("Wed, Apr 10, 24");
  });
  it("should return only seconds of date/time given", () => {
    const dateFormat = unitTestingTask("ss", "04/10/2024 12:30:30");
    const newDate = new Date("April 10, 2024 12:30:30");
    expect(dateFormat).toBe(newDate.getSeconds().toLocaleString());
  });
  it("should return only date of date/time given", () => {
    const dateFormat = unitTestingTask("d", "04/10/2024 12:30:30");
    const newDate = new Date("April 10, 2024 12:30:30");
    expect(dateFormat).toBe(newDate.getDate().toLocaleString());
  });
  it("should return only hour of date/time given", () => {
    const dateFormat = unitTestingTask("h", "04/10/2024 12:30:30");
    const newDate = new Date("April 10, 2024 12:30:30");
    expect(dateFormat).toBe(newDate.getHours().toLocaleString());
  });
});
