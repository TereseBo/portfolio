import { GraphicLink } from "@/app/components/graphicLink";
import  GitHubImage  from "../images/github.svg";


export const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <GraphicLink
            src={GitHubImage}
            url="https://www.github.com/TereseBo"
            alt="Link to github profile"
          />
        </li>
      </ul>
    </footer>
  );
};