// import React from "react";
// import {
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   Box,
//   Stack,
//   Checkbox,
// } from "@chakra-ui/react";
// const FilterVarg = ({ title, item, FilterChange, theCategory }) => {
    
//   return (
//     <AccordionItem>
//       <h2>
//         <AccordionButton>
//           <Box flex="1" textAlign="left">
//             {title}
//           </Box>
//           <AccordionIcon />
//         </AccordionButton>
//       </h2>
//       <AccordionPanel pb={4}>
//         <Stack spacing={5} direction="column">
//           {item.map((ele, i) => (
//             <Checkbox
//               key={i}
//               name={title}
//               value={ele}
//               type="checkbox"
//               onChange={(ele) => FilterChange(ele)}
//               defaultChecked={theCategory.includes({ ele })}
//             >
//               {ele}
//             </Checkbox>
//           ))}
//         </Stack>
//       </AccordionPanel>
//     </AccordionItem>
//   );
// };

// export default FilterVarg;
