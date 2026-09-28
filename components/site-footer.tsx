import { sitePath } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="wordmark" href={sitePath("/")}>CINEGLAM MEDIA</a>
        <p>Creative / Content / Production / Growth</p>
      </div>
      <div className="site-footer__links">
        <a href="mailto:ajinkyamoghe2@gmail.com">ajinkyamoghe2@gmail.com</a>
        <a href={sitePath("/work")}>Instagram / LinkedIn</a>
      </div>
      <span className="site-footer__copyright">© 2026 CineGlam Media</span>
    </footer>
  );
}
