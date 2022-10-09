import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterData from "../Filter/Filters/FilterData";
import { getShoesData } from "../redux/PagesReducer/action";
import { Flex, Box, Spacer, Grid, useMediaQuery } from "@chakra-ui/react";
import ProductDis from "../components/ProductsDisplay/ProductDis";
import Loading from "../components/Loading/Loading";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const AllshoesD = () => {
  const dispatch = useDispatch();
  const shoesD = useSelector((store) => store.pagesReducer.shoesD);
  const loading = useSelector((store) => store.pagesReducer.isLoading);

  const [isLargerThan] = useMediaQuery("(min-width: 768px)");

  const [searchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    if (location || shoesD?.length === 0) {
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
      dispatch(getShoesData(queryParams));
    }
  }, [dispatch, location.search, shoesD?.length, searchParams]);
  return (
    <div className="AllsportsD">
      <Navbar /> <br />
      {loading ? (
        <Loading />
      ) : (
        <Flex flexDirection={isLargerThan ? "row" : "column"}>
          <Box w={isLargerThan ? "15%" : "100%"}>
            <FilterData />
          </Box>
          <Spacer />
          <Box width={isLargerThan ? "80%" : "100%"}>
            <Grid
              templateColumns={
                isLargerThan ? "repeat(3, 1fr)" : "repeat(2, 1fr)"
              }
              gap={"5px"}
            >
              {shoesD?.length > 0 &&
                shoesD.map((item) => {
                  return <ProductDis key={item.key} item={item} />;
                })}
            </Grid>
          </Box>
        </Flex>
      )}
    </div>
  );
};

export default AllshoesD;
