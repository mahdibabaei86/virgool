import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import "./Tooltip.css";
import { useState } from "react";

function TooltipRegister() {
  let [showTooltip, setShowTooltip] = useState(true);
  if (!showTooltip) return null;
  return createPortal(
    <div className="cssarrow" data-aos="fade-up" data-aos-duration="3000">
      <IoClose
        className="icon_cassarow_close"
        onClick={() => setShowTooltip((prev) => !prev)}
      />
      <span>ثبت‌نام برای دسترسی به تمام امکانات ویرگول</span>
      <input type="tel" placeholder="شماره موبایل خود را وارد کنید" />
      <span className="btn_register_tooltip">ثبت نام</span>
    </div>,
    document.getElementById("tooltip-register")
  );
}

export default TooltipRegister;
