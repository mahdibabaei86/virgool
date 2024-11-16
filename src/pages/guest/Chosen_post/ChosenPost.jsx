import "./Chosen_post.css";
import ChosenLogo from "../../../images/virgool-logo.png";
import SliderChosenPost from "../../../components/Slider_Chosen_Post";

function ChosenPost({ posts }) {
  return (
    <div className="Chsoen_sliders">
      <div className="header_Chsoen_sliders">
        <h2>پست‌های منتخب</h2>
        <img src={ChosenLogo} />
      </div>
      <div className="container_sliders_chosen">
        <SliderChosenPost posts={posts} />
      </div>
    </div>
  );
}

export default ChosenPost;
