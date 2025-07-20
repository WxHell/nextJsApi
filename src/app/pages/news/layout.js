// src/app/news/layout.js
import CategoriesMenu from "../../components/CategoriesMenu";

export default function NewsLayout({ children }) {
  return (
    <CategoriesMenu>
      {children}
    </CategoriesMenu>
  );
}
