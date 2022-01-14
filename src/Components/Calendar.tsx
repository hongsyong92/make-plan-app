import { useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";

function Calendar() {
  //day
  const dayjs = require("dayjs");
  const weekday = require("dayjs/plugin/weekday");
  const isoWeek = require("dayjs/plugin/isoWeek");
  const weekOfYear = require("dayjs/plugin/weekOfYear");

  // day extend
  dayjs.extend(weekday);
  dayjs.extend(isoWeek);
  dayjs.extend(weekOfYear);

  const today = dayjs();
  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());

  const createCalendar = () => {
    const startWeek = viewDate.startOf("month").week();
    const endWeek =
      viewDate.endOf("month").week() === 1
        ? 53
        : viewDate.endOf("month").week();
    let calendar = [];

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = viewDate
                .startOf("week")
                .week(week)
                .add(n + i, "day");
              if (viewDate.format("MM") === "12") {
                current = viewDate
                  .startOf("week")
                  .week(week - 52)
                  .add(n + i, "day");
              }
              // 현재 날짜 (기준)
              let isSelected =
                selectDate.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "selected"
                  : "";
              let isToday =
                today.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "today"
                  : "";
              let isNone =
                current.format("MM") === viewDate.format("MM") ? "" : "none";
              return (
                <>
                  <div className="box" key={`${week}_${i}`}>
                    <div
                      className={`text ${isSelected} ${isToday} ${isNone}`}
                      onClick={() => {
                        setSelectDate(current);
                      }}
                    >
                      <span className={`day`}>{current.format("D")}</span>
                      {isToday ? (
                        <span className="isToday">오늘</span>
                      ) : isSelected ? (
                        <span className="isSelected"></span>
                      ) : null}
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      );
    }
    return calendar;
  };

  const changegeMonth = (date: any, changeString: string) => {
    switch (changeString) {
      case "add":
        return setViewDate(viewDate.add(1, "month"));
      case "subtract":
        return setViewDate(viewDate.subtract(1, "month"));
      default:
        return date;
    }
  };

  return (
    <Container>
      <div className="calendar_header">
        <button
          className="previous_icon"
          onClick={() => changegeMonth(viewDate, "subtract")}
        >
          이전달
        </button>
        <span className="thisMonth">{viewDate.format("MM")}월</span>
        <button
          className="next_icon"
          onClick={() => changegeMonth(viewDate, "add")}
        >
          다음달
        </button>
      </div>
      <div className="calendar_body">
        <div className="row week">
          <div className="box">
            <span className="text">일</span>
          </div>
          <div className="box">
            <span className="text">월</span>
          </div>
          <div className="box">
            <span className="text">화</span>
          </div>
          <div className="box">
            <span className="text">수</span>
          </div>
          <div className="box">
            <span className="text">목</span>
          </div>
          <div className="box">
            <span className="text">금</span>
          </div>
          <div className="box">
            <span className="text">토</span>
          </div>
        </div>
        <div>{createCalendar()}</div>
      </div>
    </Container>
  );
}

export default Calendar;

const Container = styled.div`
  width: 100%;
  .calendar_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .calendar_body {
    text-align: center;
    .row {
      display: flex;
    }
    .row.week {
      height: 20px;
      border-bottom: 1px solid ${theme.borderColor};
    }
    .box {
      width: 32px;
      height: 32px;
      margin: 6px 6px;
      font-size: 14px;
    }
  }
`;
