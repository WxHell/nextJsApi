// src/app/news/layout.js
import CategoriesMenu from "../../components/page";

export default function NewsLayout({ children }) {
  return (
    <CategoriesMenu>
      {children}
    </CategoriesMenu>
  );
}
