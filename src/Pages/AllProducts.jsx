import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterData from "../Filter/Filters/FilterData";
import { getData } from "../redux/DataReducer/action";
import { Flex, Box, Spacer, Grid } from "@chakra-ui/react";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import { useMediaQuery } from "@chakra-ui/react";
import Loading from "../components/Loading/Loading";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
//import FilterChecked from "../Filter/Filters/FilterChecked";
const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.dataReducer.products);
  const loading = useSelector((store) => store.dataReducer.isLoading);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (location.search || products?.length === 0) {
      const sortBy = searchParams.get("sortBy");

      const queryParams = {
        params: {
          category: searchParams.getAll("category"),
          gender: searchParams.getAll("gender"),
          colortype: searchParams.getAll("colortype"),
          sizes: searchParams.getAll("sizes"),
          _sort: sortBy && "rating",
          _order: sortBy,
        },
      };
      dispatch(getData(queryParams));
    }
  }, [dispatch, location.search, products?.length, searchParams]);

  return (
    <div className="AllProducts">
      <Navbar /> <br />
      {loading ? (
        <Loading />
      ) : (
        <Flex flexDirection={isLargerThan ? "row" : "column"}>
          <Box w={isLargerThan ? "15%" : "100%"}>
            <FilterData />
            {/* <FilterChecked/> */}
          </Box>
          <Spacer />
          <Box width={isLargerThan ? "80%" : "100%"}>
            <Grid
              templateColumns={
                isLargerThan ? "repeat(3, 1fr)" : "repeat(2, 1fr)"
              }
              gap={"5px"}
            >
              {products?.length > 0 &&
                products.map((item) => {
                  return <ProductDis key={item.key} item={item} />;
                })}
            </Grid>
          </Box>
        </Flex>
      )}
    </div>
  );
};

export default AllProducts;
