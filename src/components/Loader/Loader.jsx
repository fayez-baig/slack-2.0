import Spinner from "react-spinkit";
import { AppLoading, AppLoadingContent } from "./loader.styled";

const Loader = ({ displayImage }) => {
  return (
    <AppLoading>
      <AppLoadingContent>
        {displayImage && (
          <img
            src="https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif"
            alt="Slack"
          />
        )}

        <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
      </AppLoadingContent>
    </AppLoading>
  );
};

export default Loader;
