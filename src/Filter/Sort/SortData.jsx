// import { Box, Button } from "@chakra-ui/react";
// import React, { useEffect } from "react";
// import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
// const SortData = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialSortParams = searchParams.getAll("sortBy");
//   // const initialRatingParams = searchParams.getAll("rating");
//   const [sortBy, setSortBy] = useState(initialSortParams || "");
//   // const [rating, setRating] = useState(initialRatingParams || "");
//   useEffect(() => {
//     if (sortBy) {
//       setSearchParams({ sortBy: sortBy });
//     }
//   }, [setSearchParams, sortBy]);

//   return (
//     <div>
//       <Box>
//         <Menu>
//           <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//             Sort By
//           </MenuButton>
//           <MenuList>
//             {/* <MenuItem onClick={() => setSortBy("desc")}>
//               Review : High To Low
//             </MenuItem>
//             <MenuItem onClick={() => setSortBy("asc")}>
//               Review : Low to High
//             </MenuItem> */}
//             {/* <MenuItem onClick={() => setRating("desc")}>
//               Rating : High To Low
//             </MenuItem>
//             <MenuItem onClick={() => setRating("asc")}>
//               Rating : Low to High
//             </MenuItem> */}
//             <MenuItem onClick={() => setSortBy("desc")}>
//               Price : High To Low
//             </MenuItem>
//             <MenuItem onClick={() => setSortBy("asc")}>
//               Price : Low to High
//             </MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>
//     </div>
//   );
// };

// export default SortData;
