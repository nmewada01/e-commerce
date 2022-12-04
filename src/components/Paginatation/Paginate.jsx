// import React from "react";
// import { Flex, Box } from "@chakra-ui/react";
// const Paginate = ({ currentPage, setCurrentPage, totalPosts, postPerPage }) => {
//   const totalPages = Math.ceil(totalPosts / postPerPage);
//   let pages = [];

//   for (let p = 1; p <= totalPages; p++) {
//     pages.push(p);
//   }

//   return (
//     <Flex gap="1rem" my={"10"} justifyContent={"center"}>
//       <Box
//         border="1px solid white"
//         p={["0.2rem 0.5rem", "0.5rem 1rem", "0.5rem 1.5rem"]}
//         bg={"black"}
//         color={"white"}
//       >
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage(currentPage - 1)}
//         >
//           &laquo;
//         </button>
//       </Box>
//       {pages.map((page) => (
//         <Box
//           border="1px solid white"
//           p={["0.2rem 0.5rem", "0.5rem 1rem", "0.5rem 1.5rem"]}
//           bg={"black"}
//           color={"white"}
//           key={page}
//           onClick={() => setCurrentPage(page)}
//         >
//           <button>{page}</button>
//         </Box>
//       ))}
//       <Box
//         border="1px solid white"
//         p={["0.2rem 0.5rem", "0.5rem 1rem", "0.5rem 1.5rem"]}
//         bg={"black"}
//         color={"white"}
//       >
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage(currentPage + 1)}
//         >
//           &raquo;
//         </button>
//       </Box>
//     </Flex>
//   );
// };

// export default Paginate;
