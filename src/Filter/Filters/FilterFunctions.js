// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

// export const HandleCategoryChange = (e) => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const initialCategoryParams = searchParams.getAll("category");

//     const [theCategory, setTheCategory] = useState(initialCategoryParams || []);

//     const typeOutput = e.target.value;
//     let newCategory = [...theCategory];
//     if (theCategory.includes(typeOutput)) {
//       newCategory.splice(newCategory.indexOf(typeOutput), 1);
//     } else {
//       newCategory.push(typeOutput);
//     }
//     setTheCategory(newCategory);
//   };