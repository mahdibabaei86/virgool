import Logo from "../../images/virgool-logo.png";
import "./Interests.css";

function Interests() {
  return (
    <>
      <header className="header_Interests">
        <div className="header_Interests_right">
          <img src={Logo} />
          <span>به ویرگول، دنیای کلمات خوش آمدید 👋</span>
        </div>
        <div className="header_Interests_left">
          <button className="get_read_Interests">شروع به خواندن کنید</button>
        </div>
      </header>
      <div className="container_category">
        <span className="title_Interests">چند موضوع که به آن‌ها علاقه دارید را انتخاب کنید</span>
        <span className="subtitle_Interests">
          به کمک این اطلاعات، پست‌هایی که بیشتر دوست دارید به شما پیشنهاد داده
          می‌شود.
        </span>
        <div className="list_categorys">
          <div className="card_category selecte">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
          <div className="card_category">
            <img src="https://files.virgool.io/upload/topic/startup.png?width=280" />
            <span>استارتاپ</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interests;
