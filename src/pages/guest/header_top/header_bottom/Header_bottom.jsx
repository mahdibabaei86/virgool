import "./Header_bottom.css";
import SVGLogo from "../../../../images/virgool-logo-1.svg";
import { IoIosArrowBack } from "react-icons/io";

function Header_bottom() {
  return (
    <div className="header_bottom">
      <div className="left_header_bottom">
        <img src={SVGLogo} />
        <span className="btn_get_writer">
          <IoIosArrowBack />
          شروع به نوشتن
        </span>
      </div>
      <div className="right_header_bottom">
        <h1>به ویرگول، دنیای کلمات خوش آمدید</h1>
        <p>
          ویرگول بستری برای خواندن، گفت‌وگو درباره‌ی موضوعات مورد علاقه و به
          اشتراک‌گذاری ایده‌های اصیل و عمیق در زندگی شخصی، حرفه‌ای و اجتماعی
          است.
        </p>
      </div>
    </div>
  );
}

export default Header_bottom;
