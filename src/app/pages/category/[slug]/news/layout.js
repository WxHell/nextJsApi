import CategoriesMenu from "../../../../components/CategoriesMenu";

export default function NewsLayout({ children }) {
  return (  
    <CategoriesMenu>
      {children}
    </CategoriesMenu>
  );
}
