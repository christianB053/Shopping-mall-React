import { FailLoadTxt } from "./failLoadDataStyle.jsx";

export default function FailLoadData() {
  return (
    <FailLoadTxt>
      서버에 오류가 발생했습니다. 문제가 계속되면 관리자에게 문의를 주십시오.
      <br />
      관리자 연락처 xxx-xxxx
    </FailLoadTxt>
  );
}
